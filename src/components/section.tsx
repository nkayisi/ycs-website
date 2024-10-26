import React from 'react'

function Section({
    children,
    classNames
}: {
    children: React.ReactNode,
    classNames?: string
}) {
    return (
        <section className={
            `w-full px-4 sm:px-12 md:px-24 lg:px-32 xl:px-40 ${classNames}`
        }>
            {children}
        </section>
    )
}

export default Section