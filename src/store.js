import { Container } from 'unstated'
import { stat } from 'fs'


const defaultState = {
	lists: [
		{
			id: 0,
			name: "List 1",
			show: false,
			list: [{
				id: 1,
				completed: false,
				text: 'Read README'
			},
			{
				id: 2,
				completed: false,
				text: 'Add one todo'
			},
			{
				id: 3,
				completed: false,
				text: 'Add filters'
			},
			{
				id: 4,
				completed: false,
				text: 'Add multiple lists'
			},
			{
				id: 5,
				completed: false,
				text: 'Optional: add tests'
			}]
		},
		{
			id: 1,
			name: "list 2",
			show: false,
			list: [{
				id: 1,
				completed: false,
				text: 'Read README'
			},
			{
				id: 2,
				completed: false,
				text: 'Add one todo'
			},
			{
				id: 3,
				completed: false,
				text: 'Add filters'
			},
			{
				id: 4,
				completed: false,
				text: 'Add multiple lists'
			},
			{
				id: 5,
				completed: false,
				text: 'Optional: add tests'
			}]
		},
	]

}

class TodosContainer extends Container {
	constructor(props) {
		super(props)

		this.state = this.readStorage()
	}

	readStorage() {
		if (window && window.localStorage) {
			const state = window.localStorage.getItem('appState')
			if (state) {
				return JSON.parse(state)
			}
		}

		return defaultState
	}

	syncStorage() {
		if (window && window.localStorage) {
			const state = JSON.stringify(this.state)
			window.localStorage.setItem('appState', state)
		}
	}

	getList() {
		return this.state.lists;
	}
	
	toggleComplete = async (listId, todoId) => {
	
		const listItem = this.state.lists.find(i => i.id === listId);
		const item = listItem.list.find(i => i.id === todoId);
		const completed = !item.completed
		// We're using await on setState here because this comes from unstated package, not React
		// See: https://github.com/jamiebuilds/unstated#introducing-unstated
		await this.setState(state => {
			let lists = [...state.lists]
			let todo = [...lists[listId].list]
			todo[todoId - 1] = { ...todo[todoId - 1], completed }
			lists[listId] = { ...lists[listId], list: todo }
			return { lists }
		})

		this.syncStorage()
	}

	createTodo = async (text,listId) => {
		await this.setState(state => {
			const item = {
				completed: false,
				text,
				id: state.lists[listId].list.length+1
			}
			let lists = [...state.lists]
			let todo = [...lists[listId].list,item]
			lists[listId] = { ...lists[listId], list: todo }
			return { lists }
		})

		this.syncStorage()
	}

	createList = async name => {
		await this.setState(state => {
			const item = {
				show: false,
				name,
				id: state.lists.length ,
				list: []
			}

			const lists = [
				...state.lists.concat(item)
			]
			return { lists }
		})

		this.syncStorage()
	}
	toggleList = async (id) => {
		const record = this.state.lists.find(rec => rec.id == id);
		const show = !record.show;
		await this.setState(state => {
			const lists = [...state.lists]
			lists[id] = { ...lists[id], show }
			return { lists }
		})
	}
}

export default TodosContainer
