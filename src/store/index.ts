import { create } from 'zustand';

export interface ListItem {
  id: string;
  status: 'todo' | 'done';
  content: string;
}

interface State {
  list: ListItem[];
}

interface Action {
  addItem: (item: ListItem) => void;
  deleteItem: (id: string) => void;
  updateItem: (item: ListItem) => void;
}

export const useTodoListStore = create<State & Action>((set) => ({
  list: [],
  addItem: (item: ListItem) => {
    set((state) => {
      return {
        list: [...state.list, item],
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
}));
