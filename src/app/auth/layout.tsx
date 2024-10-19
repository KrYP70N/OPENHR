export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <main className="flex">
      <section className="bg-secondary w-[30vw] h-[100vh]"></section>
      <section className="bg-[url('/img/wp.jpg')] bg-cover bg-no-repeat bg-center w-[70vw] h-[100vh]">&nbsp;</section>
      <section className="w-[385px] p-4 bg-white shadow-md absolute top-[50%] translate-y-[-50%] left-[15vw] rounded-lg">
        {children}
      </section>
    </main>
  )
}