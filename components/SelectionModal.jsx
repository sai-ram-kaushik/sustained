"use client";
import Link from 'next/link'
import React from 'react'

const SelectionModal = ({ showModal, setShowModal }) => {
  return (
    <div>
      <div className={`items-center justify-center  absolute z-20 top-3/4 gap-5 bg-secondary ${showModal ? "flex flex-col" : "hidden"} p-3`} onMouseLeave={() => setShowModal(false)}>
        <Link
          href={"/organizing-committee"}
          className="text-background text-center hover:text-gray-300">
          <li>Organizing Committee</li>
        </Link>
        <Link
          href='/advisory-committee'
          className="text-background text-center hover:text-gray-300">
          <li>Advisory Committee</li>
        </Link>
      </div>
    </div>
  )
}

export default SelectionModal
