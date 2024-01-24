import { component$, useSignal } from '@builder.io/qwik';


export default component$(() => {
  const isJonasVisableSignal = useSignal(false);
  return (
    <>
      <button onClick$={() => {
        isJonasVisableSignal.value = !isJonasVisableSignal.value;
      }}>Ahoj!</button>
      { isJonasVisableSignal.value ?
        <Jonas>I love Angela</Jonas>
        : null
      }
    </>
  );
});

export const Jonas = component$(() => {
  return <>
  <div>Hello, my name is Jonas. Will you pour yourself some tea?</div>
  <div>The workers are coming home!</div>
  </>;
})