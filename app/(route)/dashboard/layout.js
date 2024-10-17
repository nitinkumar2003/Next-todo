
export const metadata = {
    title: "Todo-List",
    description: "Todo List URL"
}
export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body  >
        {children}
      </body>
    </html>
  );
}
