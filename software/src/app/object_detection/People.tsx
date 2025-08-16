import * as SnapshotCard from "./SnapshotCard";

export default function People() {
    return <div className="inline-flex flex-wrap place-content-evenly gap-3 mx-auto">
        <SnapshotCard.Card>
            <SnapshotCard.Image src="https://www.growgreen.ca/wp-content/uploads/2019/04/the-5-simple-ways-to-brighten-up-your-front-yard.jpg"></SnapshotCard.Image>
            <SnapshotCard.Cover datetime="7:08 PM"></SnapshotCard.Cover>
        </SnapshotCard.Card>
        <SnapshotCard.Card>
            <SnapshotCard.Image src="https://www.growgreen.ca/wp-content/uploads/2019/04/the-5-simple-ways-to-brighten-up-your-front-yard.jpg"></SnapshotCard.Image>
            <SnapshotCard.Cover datetime="7:10 PM"></SnapshotCard.Cover>
        </SnapshotCard.Card>
        <SnapshotCard.Card>
            <SnapshotCard.Image src="https://www.growgreen.ca/wp-content/uploads/2019/04/the-5-simple-ways-to-brighten-up-your-front-yard.jpg"></SnapshotCard.Image>
            <SnapshotCard.Cover datetime="7:11 PM"></SnapshotCard.Cover>
        </SnapshotCard.Card>
        <SnapshotCard.Card>
            <SnapshotCard.Image src="https://www.growgreen.ca/wp-content/uploads/2019/04/the-5-simple-ways-to-brighten-up-your-front-yard.jpg"></SnapshotCard.Image>
            <SnapshotCard.Cover datetime="7:12 PM"></SnapshotCard.Cover>
        </SnapshotCard.Card>
    </div>;
}