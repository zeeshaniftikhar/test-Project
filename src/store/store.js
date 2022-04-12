import create from "zustand"


const useStore = create((set) => ({
    people : [],
    addPerson: (person)=>
     set((state)=> ({ people: [...state.people, person]})),
})) 
export default useStore