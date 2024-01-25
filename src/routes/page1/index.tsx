import { component$, useSignal } from '@builder.io/qwik';
import { Projector } from "./projector"; 

export default component$(() => {
  const messageSignal = useSignal("");

  return <div>
    This is Page 1

    <hr />
    
    <input type="text" placeholder="Type your search"
      onInput$={(e) => {
        messageSignal.value = (e.target as HTMLInputElement).value;
      }}
    />
    
    <hr />
    
    <Projector message={messageSignal.value}>Your message is:</Projector>

  </div>
});