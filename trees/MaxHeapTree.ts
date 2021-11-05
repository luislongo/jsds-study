export class MaxHeapTree {
    values : number[]

    constructor() {
        this.values = new Array<number>()
    }

    insert = (value : number) => {
        this.values.push(value)
        const valueId = this.values.length - 1
        this.#bubbleUp(valueId)
    }
    #bubbleUp = (id : number) => {
        if(id != 0) {
            const parentId = this.#parentOf(id)
            if(this.values[id] > this.values[parentId]) {
                this.#swap(id, parentId)
                this.#bubbleUp(parentId)
            }
        }
    }
    remove = () : number | null => {
        if(this.values.length > 0) {
            const value = this.values[0]
            const last = this.values.pop()!

            if(this.values.length > 0) {
                this.values[0] = last
                this.#bubbleDown(0)
            }

            return value
        } else {
            return null
        }
    }
    #bubbleDown = (id : number) => {
        const leftChildId = this.#leftChildOf(id)
        const rightChildId = this.#rightChildOf(id)

        if(rightChildId >= this.values.length) {
            // Only left child available
            if((leftChildId < this.values.length) && 
               (this.values[id] < this.values[leftChildId])) 
            {
                this.#swap(id, leftChildId)
                this.#bubbleDown(leftChildId)
            }
        } else {
            // Both children are available
            if(this.values[id] < this.values[leftChildId]) {
                if(this.values[id] < this.values[rightChildId]) {
                    if(this.values[leftChildId] > this.values[rightChildId]) {
                        this.#swap(id, leftChildId)
                        this.#bubbleDown(leftChildId)
                    } else {
                        this.#swap(id, rightChildId)
                        this.#bubbleDown(rightChildId)
                    }
                } else {
                    this.#swap(id, leftChildId)
                    this.#bubbleDown(leftChildId)
                }    
            } else {
                if(this.values[id] < this.values[rightChildId]) {
                    this.#swap(id, rightChildId)
                    this.#bubbleDown(rightChildId)
                }
            }
        }
    }
    #swap(aId : number, bId : number) {
        const tempAId = this.values[aId]
        this.values[aId] = this.values[bId]
        this.values[bId] = tempAId
    }

    #parentOf(id : number) : number {
        return Math.floor(id - 1 / 2)
    }
    #leftChildOf(id : number) : number {
        return (2 * id + 1)
    }
    #rightChildOf(id: number) : number {
        return (2 * id + 2)
    }
}