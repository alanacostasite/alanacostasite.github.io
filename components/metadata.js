import Head from "next/head"

export function Metadata(props) {
    let title = "Alan Acosta";
    let description = "Alan Acosta - jazz saxophonist - jazz flute - live. connect. about. media. discography. contact.";

    if (props?.title) {
        title = props.title;
    }

    if (props?.description) {
        description = props.description;
    }

    // Gonna have to put twitter and other metadata here
    return <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Alan Acosta" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://alanacosta.com/press/IMG_0540.jpg" />
        <meta property="og:url" content="https://alanacosta.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content="Learn more about upcoming events and connect with Alan." />
        <meta property="og:site_name" content="Alan Acosta" />
        <meta name="twitter:image:alt" content="Alan playing a saxophone surrounded by colorful feathers"></meta>
    </Head>
}