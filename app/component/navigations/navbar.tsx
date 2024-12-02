'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from "framer-motion"

import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

import Link from 'next/link'

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      })



    // START: Menjalankan proses tambah className saat scroll kebawah, dan menghilangkan saat scroll kembali ke posisi 0
    const [bgColor, setBgColor] = useState('bg-transparent') // Tambahkan state untuk warna latar belakang

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setBgColor('bg-black/70 backdrop-blur-lg	') // Set warna latar belakang menjadi hitam saat menggulir
            } else {
                setBgColor('bg-transparent') // Kembali ke putih saat scroll ke atas
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll) // Bersihkan event listener
        }
    }, [])
    // END: Menjalankan proses tambah className saat scroll kebawah, dan menghilangkan saat scroll kembali ke posisi 0

    return (
        <>
            <section className='fixed top-0 w-screen'>
                <header className={`${bgColor} text-white duration-300 transition-all z-50`}>
                    <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                        <div className="flex lg:flex-1">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                {/* <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                                /> */}
                            </Link>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                            <Popover className="relative">
                                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold ">
                                    Product
                                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none " />
                                </PopoverButton>

                                <PopoverPanel
                                    transition
                                    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="p-4">
                                        {products.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                            >
                                                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon aria-hidden="true" className="size-6  group-hover:text-indigo-600" />
                                                </div>
                                                <div className="flex-auto">
                                                    <Link href={item.href} className="block font-semibold ">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </Link>
                                                    <p className="mt-1 ">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                        {callsToAction.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold  hover:bg-gray-100"
                                            >
                                                <item.icon aria-hidden="true" className="size-5 flex-none " />
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </PopoverPanel>
                            </Popover>

                            <Link href="#" className="text-sm/6 font-semibold">
                                Features
                            </Link>
                            <Link href="#" className="text-sm/6 font-semibold">
                                Marketplace
                            </Link>
                            <Link href="#" className="text-sm/6 font-semibold">
                                Company
                            </Link>
                        </PopoverGroup>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <Link href="#" className="text-sm/6 font-semibold">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </nav>
                    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                        <div className="fixed inset-0 z-10" />
                        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <Link href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    {/* <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              /> */}
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <Disclosure as="div" className="-mx-3">
                                            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold hover:bg-gray-50">
                                                Product
                                                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </Disclosure>
                                        <Link
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                                        >
                                            Features
                                        </Link>
                                        <Link
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                                        >
                                            Marketplace
                                        </Link>
                                        <Link
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                                        >
                                            Company
                                        </Link>
                                    </div>
                                    <div className="py-6">
                                        <Link
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold hover:bg-gray-50"
                                        >
                                            Log in
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Dialog>
                </header>
                <motion.div
                    className="progress-bar bg-gradient-to-r from-blue-950 via-cyan-700 to-cyan-400"
                    style={{ scaleX }}
                />
            </section>
        </>
    )
}