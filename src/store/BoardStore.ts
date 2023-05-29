import { create } from 'zustand'

import { getTodosGroupedByColumn } from '@/utils/getTodosGroupedByColumn'

interface BoardProps {
  board: Board
  getBoard: () => void
}

export const useBoardStore = create<BoardProps>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>()
  },
  getBoard: async () => {
    const board = await getTodosGroupedByColumn()
     
    set({ board })
  },
}))
