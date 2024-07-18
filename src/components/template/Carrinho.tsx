import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function Carrinho() {
    return (
        <Link href="/carrinho">
            <div className="flex relative">
                <IconShoppingCart size={32} stroke={1} />
                <div className="
                    -top-2.5 -right-1.5
                    absolute w-5 h-5 bg-red-600 rounded-full
                    flex justify-center items-center text-xs
                "
                >
                    99
                </div>
            </div>
        </Link>
    )
}