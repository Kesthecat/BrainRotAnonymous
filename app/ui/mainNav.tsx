import NavLinks from "./navLinks"

export default function MainNav() {
    return (
        <div className="text-white py-3 px-8 h-16 bg-linear-to-r from-purple-primary to-purple-primary-light content-center sticky top-0 z-50" >
            <NavLinks />
        </div>
    )
}