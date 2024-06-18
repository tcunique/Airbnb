import Header from "./header.jsx";

export default function SearchLayout({ children }) {
  return (
    <>
      <Header />
      <main className="relative top-[7.5rem] pt-4 container mx-auto text-black">
        {children}
      </main>
    </>
  )
}