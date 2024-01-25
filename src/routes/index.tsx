import { component$, Slot, useSignal, useTask$ } from '@builder.io/qwik';


export default component$(() => {
  const isJonasVisableSignal = useSignal(false);
  const didHeGetABeerSignal = useSignal(false);

  useTask$(({track}) => {
    track(() => didHeGetABeerSignal.value);

    if (didHeGetABeerSignal.value) {
      isJonasVisableSignal.value = true;
    }
  })

  return (
    <>

      <BeerGiver gotBeerSignal={didHeGetABeerSignal} />

      {isJonasVisableSignal.value ?
        <Jonas>I love Angela!</Jonas>
        : null}
    </>
  );
});

interface BeerGiverProps{
  gotBeerSignal: Signal<boolean>;
}

export const BeerGiver = component$((props: BeerGiverProps) => {
  return <div>
    <button onClick$={() => {
      props.gotBeerSignal.value = true;
    }}>Give a Beer to Jonas</button>
  </div>;
})

export const Jonas = component$(() => {
  return <div>
    <div>Hello, my name is Jonas.</div>
    <div>Will you pour yourself some tea?</div>
    <div>The workers are coming home!</div>
    <Slot />
  </div>;
})