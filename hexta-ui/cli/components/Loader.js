export const SpinnerCircleLoader = ({ size }) => {
  return (
    <>
      <div
        className={`w-${size} h-${size} border-t-2 rounded-full border-zinc animate-spin`}
      ></div>
    </>
  );
};

export const SpinnerSquareLoader = ({ size }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className={`w-${size} h-${size} bg-zinc-100 animate-spin`}></div>
      </div>
    </>
  );
};

export const CircleBouncingLoader = ({ size }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex space-x-2">
          <div
            className={`w-${size} h-${size} rounded-full bg-zinc-100 animate-bounce`}
          ></div>
          <div
            className={`w-${size} h-${size} delay-100 rounded-full bg-zinc-100 animate-bounce`}
            style={{
              animationDelay: "0.2s",
            }}
          ></div>
          <div
            className={`w-${size} h-${size} delay-200 rounded-full bg-zinc-100 animate-bounce`}
            style={{
              animationDelay: "0.3s",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export const SquareBouncingLoader = ({ size }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex space-x-2">
          <div
            className={`w-${size} h-${size} bg-zinc-100 animate-bounce`}
          ></div>
          <div
            className={`w-${size} h-${size} bg-zinc-100 animate-bounce`}
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className={`w-${size} h-${size} bg-zinc-100 animate-bounce`}
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export const PingLoader = ({ size }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div
          className={`w-${size} h-${size} rounded-full bg-zinc-100 animate-ping`}
        ></div>
      </div>
    </>
  );
};

export const ColoredLoader = ({ size, color }) => {
  return (
    <>
      <div
        className={`w-${size} h-${size} border-${color}-500 border-t-2 rounded-full border-zinc animate-spin`}
      ></div>
    </>
  );
};
