export default function HelloAlert({ name }: { name: string }) {
  return (
    <div id="toaster" class="toaster">
      <div class="toast alert floating-notification bg-muted">
        <h2 class="text-lg font-semibold">
          👋 hello, {name}!
        </h2>
      </div>
      <style>
        {`
          @keyframes slideInOut {
            0% {
              transform: translate(0%, 100%);
              opacity: 0;
            }
            15% {
              transform: translate(0%, 0);
              opacity: 1;
            }
            85% {
              transform: translate(0%, 0);
              opacity: 1;
            }
            100% {
              transform: translate(0%, 100%);
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
