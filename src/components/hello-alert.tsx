export default function HelloAlert({ name }: { name: string }) {
  return (
    <div class="fixed top-0 left-1/2 max-w-3xl">
      <div class="alert floating-notification px-8 py-4 mt-4 bg-muted">
        <h2 class="text-lg font-semibold">
          👋 hello, {name}!
        </h2>
      </div>
      <style>
        {`
          @keyframes slideInOut {
            0% {
              transform: translate(-50%, -100%);
              opacity: 0;
            }
            15% {
              transform: translate(-50%, 0);
              opacity: 1;
            }
            85% {
              transform: translate(-50%, 0);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -100%);
              opacity: 0;
            }
          }
          .floating-notification {
            animation: slideInOut 3s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
}
