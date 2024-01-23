import { component$ } from '@builder.io/qwik';


export default component$(() => {
  return (
    <>
      <Jonas />
      <div>
        The workers are comming home!
      </div>
      <button onClick$={() => {
        console.log('Ahoj!')
      }}>Ahoj!</button>
    </>
  );
});

export const Jonas = component$(() => {
  return <div>Hello, my name is Jonas. Will you pour yourself some tea?</div>;
})