
"use client";

import { Button } from "@/components/ui/button";

export function CheckoutButton() {
    return (
        <a
            href="https://pay.mycheckoutt.com/019d063e-201b-7217-8984-6d1f03bc6857?ref="
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[320px] mx-auto block my-5"
        >
            <Button
                className="w-full text-base h-auto py-4 px-6 font-bold font-body btn-glow btn-gradient-2 rounded-full leading-tight whitespace-normal"
            >
                QUIERO ESCUCHAR LA MELODÍA
            </Button>
        </a>
    )
}
