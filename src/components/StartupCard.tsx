import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function StartupCard({ post }: { post: any }) {
    const {
        _createdAt,
        views,
        author: { _id: authorId, name },
        title,
        catagory,
        id,
        image,
        description,
    } = post;

    return (
        <>
            <li className="startup-card group">
                <div className="flex-between">
                    <p className="startup-card_date">
                        {formatDate(_createdAt)}
                    </p>
                    <div className="flex gap-1.5">
                        <EyeIcon className="size-5 text-primary" />
                        <span className="text-16-medium">{views}</span>
                    </div>
                </div>

                <div className="flex-between mt-5 gap-6">
                    <div className="flex-1">
                        <Link href={`/user/${authorId}`}>
                            <p className="text-16-medium line-clamp-1">
                                {name}
                            </p>
                        </Link>

                        <Link href={`/startup/${id}`}>
                            <h3 className="text-26-semibold line-clamp-1">
                                {title}
                            </h3>
                        </Link>
                    </div>
                    <Link href={`/user/${authorId}`}>
                        <Image
                            src="https://placeholder.co/600x400"
                            alt="placeholder"
                            width={48}
                            height={48}
                            className="startup-card_img"
                        />
                    </Link>
                </div>
                <Link href={`/startup/${id}`}>
                    <p className="startup-card_desc">{description}</p>
                    <img src={image} alt="image" className="startup-card_img" />
                </Link>

                <div className="flex-between gap-3 mt-5">
                    <Link href={`/?query=${catagory}`}></Link>

                    <Button className="startup-card_btn asChild">
                        <Link href={`/startup/${id}`}>Details</Link>
                    </Button>
                </div>
            </li>
        </>
    );
}

export default StartupCard;
