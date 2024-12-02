import HeaderPage from "./(pages)/header/page";
import ProductsPage from "./(pages)/projects/page";

export default function page() {
    return (
        <>
            <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-md">
                <section className="h-screen " id="home">
                    <HeaderPage />
                </section>
                <section className="h-screen " id="projects">
                    <ProductsPage />
                </section>
                <section className="h-screen " id="profile">
                    {/* https://motion.dev/docs/examples ##Pinning */}
                </section>
                <section className="h-screen " id="contact"></section>
            </div>
        </>
    )
}
