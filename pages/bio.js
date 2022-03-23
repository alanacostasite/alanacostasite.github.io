import { Header } from "../components/header";
import { PageBody } from "../components/pageBody";

export default function Bio() {
    return (
        <PageBody>
            <Header isSolidBackground={true} />
            <div>
                bio
            </div>
        </PageBody>
    );
}