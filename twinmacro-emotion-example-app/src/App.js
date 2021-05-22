// import "twin.macro";
import tw, { styled, css, theme } from "twin.macro";

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
};

const Button = styled.button(({ variant, isSmall }) => [
  // The common button styles added with the tw import
  tw`px-8 py-2 duration-75 transform rounded focus:outline-none`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-yellow-400)`,

  // Use props to conditionally style your components
  variant === "primary" && tw`text-white bg-black border-black`,

  // Combine regular css with tailwind classes within backticks
  variant === "secondary" && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`border-2 border-yellow-600`,
  ],

  // Conditional props can be used
  isSmall ? tw`text-sm` : tw`text-lg`,

  // The theme import can supply values from your tailwind.config.js
  css`
    color: ${theme`colors.white`};
  `,
]);

const Logo = () => (
  <a
    tw="w-32 mb-10 p-5 block opacity-50 hover:opacity-100"
    href="https://github.com/ben-rogerson/twin.macro"
    target="_blank"
    rel="noopener noreferrer"
  >
    <TwinSvg />
  </a>
);

const TwinSvg = () => (
  <svg fill="black" viewBox="0 0 100 35" xmlns="http://www.w3.org/2000/svg">
    <path d="m31.839 11.667c0-6.2223-3.3515-10.111-10.054-11.667 3.3514 2.3333 4.6082 5.0556 3.7704 8.1667-0.4781 1.7751-1.8653 3.0438-3.4009 4.4481-2.5016 2.2877-5.3968 4.9354-5.3968 10.718 0 6.2223 3.3515 10.111 10.054 11.667-3.3515-2.3333-4.6083-5.0556-3.7704-8.1667 0.478-1.775 1.8653-3.0438 3.4009-4.4481 2.5015-2.2877 5.3967-4.9354 5.3967-10.718z" />
    <path d="m-2.7803e-7 11.667c1.4828e-7 -6.2223 3.3515-10.111 10.055-11.667-3.3515 2.3333-4.6083 5.0556-3.7705 8.1667 0.47806 1.7751 1.8653 3.0438 3.4009 4.4481 2.5016 2.2877 5.3968 4.9354 5.3968 10.718 0 6.2223-3.3515 10.111-10.054 11.667 3.3515-2.3333 4.6083-5.0556 3.7704-8.1667-0.47805-1.775-1.8653-3.0438-3.4009-4.4481-2.5015-2.2877-5.3967-4.9354-5.3967-10.718z" />
    <path d="m50.594 15.872h-3.9481v7.6c0 2.0267 1.3373 1.995 3.9481 1.8683v3.0717c-5.2853 0.6333-7.3867-0.8233-7.3867-4.94v-7.6h-2.9292v-3.2933h2.9292v-4.2534l3.4386-1.0133v5.2667h3.9481v3.2933zm21.324-3.2933h3.6297l-4.9988 15.833h-3.3749l-3.3113-10.672-3.3431 10.672h-3.375l-4.9987-15.833h3.6297l3.0884 10.925 3.3431-10.925h3.2794l3.3113 10.925 3.1202-10.925zm7.8961-2.375c-1.2099 0-2.1969-1.0134-2.1969-2.185 0-1.2033 0.987-2.185 2.1969-2.185s2.1969 0.98167 2.1969 2.185c0 1.1717-0.987 2.185-2.1969 2.185zm-1.7193 18.208v-15.833h3.4386v15.833h-3.4386zm15.792-16.245c3.566 0 6.1131 2.4067 6.1131 6.5233v9.7217h-3.4386v-9.3733c0-2.4067-1.401-3.6734-3.566-3.6734-2.2606 0-4.0436 1.33-4.0436 4.56v8.4867h-3.4386v-15.833h3.4386v2.0266c1.0507-1.6466 2.77-2.4383 4.9351-2.4383z" />
  </svg>
);

const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </div>
);

export default App;
