import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ListItem {
  id: string;
  status: 'todo' | 'done';
  content: string;
}

interface State {
  list: ListItem[];
}

interface Action {
  addItem: (item: ListItem, id?: string) => void;
  deleteItem: (id: string) => void;
  updateItem: (item: ListItem) => void;
}

const stateCreator: StateCreator<State & Action> = (set) => ({
  list: [],
  addItem: (item: ListItem, id?: string) => {
    set((state) => {
      if (!id) {
        return {
          list: [...state.list, item],
        };
      }
      const newList = [...state.list];

      newList.splice(
        newList.findIndex((item) => item.id === id),
        0,
        item,
      );

      return {
        list: newList,
      };
    });
  },
  deleteItem: (id: string) => {
    set((state) => {
      return {
        list: state.list.filter((item) => {
          return item.id !== id;
        }),
      };
    });
  },
  updateItem: (updateItem: ListItem) => {
    set((state) => {
      return {
        list: state.list.map((item) => {
          if (item.id === updateItem.id) {
            return updateItem;
          }
          return item;
        }),
      };
    });
  },
});

export const useTodoListStore = create<State & Action>()(
  persist(stateCreator, {
    name: 'todolist',
  }),
);
