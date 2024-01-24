import { component$ } from "@builder.io/qwik";

export interface ProjectorProps {
    value?: string,
  }
  
export const Projector = component$<ProjectorProps>((props) => {
    return <div>You typed: {props.value}</div>;
})