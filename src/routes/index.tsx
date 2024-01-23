import { component$ } from '@builder.io/qwik';


export default component$(() => {
  return (
    <>
      <Misko />
      <span>
        Hello World!
      </span>
    </>
  );
});

export const Misko = component$(() => {
  return <div>Bla</div>;
})