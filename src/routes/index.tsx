import { component$, Slot, useSignal } from '@builder.io/qwik';


export default component$(() => {
  const isJonasVisableSignal = useSignal(false);
  return (
    <>
      <button onClick$={() => {
        isJonasVisableSignal.value = !isJonasVisableSignal.value;
      }}>Hello,</button>
      { isJonasVisableSignal.value ?
        <Jonas>I love Angela!</Jonas>
        : null
      }
    </>
  );
});

export const Jonas = component$(() => {
  return <div>
  <div>my name is Jonas.</div>
  <div>Will you pour yourself some tea?</div>
  <div>The workers are coming home!</div>
  <Slot />
  </div>;
})