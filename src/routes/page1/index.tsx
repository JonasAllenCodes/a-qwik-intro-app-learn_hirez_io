import { component$, useSignal } from '@builder.io/qwik';
import { Projector } from "./projector"; 

export default component$(() => {
  const searchText = useSignal("");

  return <div>
    This is Page 1

    <hr />
    
    <input type="text" placeholder="Type your search" onInput$={(e) => {
      searchText.value = (e.target as HTMLInputElement).value
    }}/> 
    
    <hr />
    
    {searchText.value ?? (
      <>
        <Projector value={searchText.value} />
      </>
    )}

  </div>
});