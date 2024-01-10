import java.util.HashMap;

public class TestTrackList {
    public static void main(String[] args) {
        var trackList = new HashMap<String, String>();
        trackList.put("Diggy Diggy Hole", "I am a dwarf and I'm digging a hole");
        trackList.put("Banjo Time", "hurg hurg hurg hurg hurg hurg banjo hurg");
        trackList.put("Celery Man", "It's time for vegetables man It's celery man He's made of celery Eat your vitamins");
        trackList.put("Asdf", "asdf asdf asdf asdf asdf");

        System.out.println("Lyrics for song by title (Asdf):");
        System.out.println(trackList.get("Asdf"));

        System.out.println("--- Full Listing ---");

        for (String track : trackList.keySet()) {
            System.out.printf("\"%s\"\n", track);
            System.out.println(trackList.get(track));
        }
    }
}
