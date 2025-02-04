const Fiber = () => {
  return (
    <div>
      <div dir="auto">
        <h3 dir="auto">Reconciliation versus rendering</h3>
        <p dir="auto">
          The DOM is just one of the rendering environments React can render to,
          the other major targets being native iOS and Android views via React
          Native. (This is why "virtual DOM" is a bit of a misnomer.)
        </p>
        <p dir="auto">
          The reason it can support so many targets is because React is designed
          so that reconciliation and rendering are separate phases. The
          reconciler does the work of computing which parts of a tree have
          changed; the renderer then uses that information to actually update
          the rendered app.
        </p>
        <p dir="auto">
          This separation means that React DOM and React Native can use their
          own renderers while sharing the same reconciler, provided by React
          core.
        </p>
        <p dir="auto">
          Fiber reimplements the reconciler. It is not principally concerned
          with rendering, though renderers will need to change to support (and
          take advantage of) the new architecture.
        </p>
      </div>
    </div>
  );
};

export default Fiber;
