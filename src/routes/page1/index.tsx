import { component$, useSignal } from '@builder.io/qwik';

export interface ProjectorProps {
  value?: string,
}

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

export const Projector = component$<ProjectorProps>((props) => {
  return <div>You typed: {props.value}</div>;
})