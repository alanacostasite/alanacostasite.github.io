import Head from "next/head"

export function Metadata(props) {
    let title = "Alan Acosta";
    let description = "Alan Acosta - jazz saxophonist - jazz flute - live. connect. about. media. discography. contact.";

    if(props?.title) {
        title = props.title;
    }

    if(props?.description) {
        description = props.description;
    }

    // Gonna have to put twitter and other metadata here
    return <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
}