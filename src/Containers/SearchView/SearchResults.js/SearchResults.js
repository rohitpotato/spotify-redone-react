import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../../Wrapper/Wrapper";
import useQueryHook from "../../../hooks/useQueryHook";
import { queryKeys } from "../../../constants";
import "./SearchContainer.css";

const SearchResults = ({ sTerm }) => {
  //   const searchQuery = useQueryHook({
  //     key: [queryKeys.SEARCH, sTerm],
  //     url: `/search?q=${sTerm}&type=album,artist,playlist,track&limit=6`,
  //     id: sTerm,
  //   });

  const image =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExMSEBUVFRAQEBASFRIQDw8QFRIWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0fHR0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLSstLS0tLS0tLTc3LS03LS03KysrLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EADgQAAEDAgMECAQGAwEBAQAAAAEAAgMEEQUhURIxQWEGExQiUnGBkUKSodEVFjJTYrFDcoIjwTP/xAAbAQACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EACYRAAICAQQCAgIDAQAAAAAAAAABAgMRBBIhMRMUQVEFIiMyYRX/2gAMAwEAAhEDEQA/ALFtW5v6pJPnco5sWduD3j/p1/7QkkSGqAG5DNx3DTzXMyzSHCueczLIP+3fdSdtP77x/wBu+6pm0jjvcPJTNoPVU2yJItYqvWd/zu+6KbUuO6Rx077vuqRtB6JxptkXJI53Q5f2Q0cbZAM3v+Z33XXF5+N/zOWXFe9v6XOI1duUz8XlIsbAa2sh2yZeUWtTXbH+SRx023fdAurJ3bnvb/077qvjnfvDRbxHIKaHEZDuaDztZqvD+y0wgPnP+WT53fdDvxQtfsGWS/8Au77qSOtdvda3IZe6zeIUj3Tl2tiE+upyWcguSNa2SU59ZLbXbd91x00py6yT53fdSYJRuDRtEuYfdpRtfQSMG00bbPEBcjzWeTaeEwsFe6olIt1kgH+7h9VDPNJkOtkaOID3XP1Ti4O3uPskY2cLlVvYLlFDO1yDdJJ6veT/AGnisl/ck+dy7HTknJpKOjwp54WQzuS7YDuiBNrJP3JPmcpO1S/uSfM77q1jwB3EouPBBqs0tXH7B8yKETzeKX5nfdOE83il+Zy0zMHA4lStwvmkS1sQld/hlO1S+OT5nJnbJP3H/M5a84b5HzF1FLhoO9gd6WVLWR+xitX0ZRlXJf8A/ST53fdTitf+4/53fdW8mDRHgWHzyQ0vR8/A4O5HJNV6l8hKyL+AVtZJ+4/5nfdD1FfK0h23Jbj3nfdR1EMkeTmEcwLhcjic8XGY43yWirLfZcpLAZ+OO8T/AJnfdcUf4cND7pLdt/0VlEc7msFzvO4Kvjp7m9t/FECMvdtO3k5cgrSGAcAkuWCwampB4b+aMbT2G4IulpuJUjWAlJcskRXPgFrn6KqqKMuNyTbg1Xde8X2RwzKFYwnM5X4Ik2RgFPhbQNoi54DgFMMKF9p5LtG6KzYy55BSsZxKt2MhSyYY5zgDkzRPNEb7IFmj62V0I+PspuqAGeZKisZDNtpQbuOTW7hqUzEKMODZALW0UmMy/wDoI25a2Ti+zLE+i6WlbxyIumo8h+H4iwMzIAG8cUNU4+83bHkN2YVds3RVPThZL3GLEvUNkdLRuebnLiVdU1FG3eLofrLCwUfWlcu23ILk2XkTmjcAiGyKmp3lWERyWCya+ybWw9r1O0qvjcio5FjlJMYohbSn3QwkTttA8BBC4VBtpjpUOC8slfE08EO+mt+lc6wp7ZEackTLBZr8RdAyQch/SuSQVC+FaK9TKPTDTK3/AJXEb1ZSWj3p/ZZlaNt3nQZKztayEpIyL34m6KcNy7LDDg7urjTYE+qi2skyqqA1pLsuF0CIAPBJJPE/RPZvOgyCcxwcAQcuCRts+ZRlBMZ7oU5yACHGQAUxOYQstBGzmBomzmxJ0F05rxdVmIYhs3A48U+ilyeRdtsYIpGNIe6R2832Rok51+ailfc3upYitt1irjiJzm3N5ZJE1FbdkMHKQ5riX3fYxI6XqemnAOaG2OakjC5ttqY2Mfstopxwsi4n5KljICNp5gsEh6SLNhU7HKAS5J8EgJQB4CXuC60oad9ipWvVkSJyFG5qY6oCHfVDcpkvCJnJhcEKZb8Utm+5TJWEE9YU9k90H1bguhyoHaGbaSE2klZRVsbzUzGX4hA08wIU0drr1bGhgj5qu6RC0W/eUbHmqrpO60QRQ7LI6R//AItAyzROIS7MYtkVXUco6tvmpsZfk0JuEBF8lpT36oOcc+Cmik7heeCGkk/82jkFyedrGWujqp3sRZeoNjZ687OhP9KinmJOZXJaguKhcVunONUcIxZc5ZY8FGMaoadl0U/cuRdZkZ0QyyBvFByYw1uV0Fihcb2WdqoSN5WZUxn2wHY0as44NVG/pKBksaWamwTxE0/HnwFijWgrKU7GapvSZt0fS9I2lYZtG47jf3T2QPaVU9DVgvy2R7PVqfFg9uRRVBWZrz7Bq43AOS2mFMJXG1OnVTZsps3lnX1ed1BNjTWjeh8Ra5oKxmL1LswEOno8rJbZsNNP0lYDmU6HH2H4l5rUCQ5lQsEvC66n/Mra7MvtSyes/i7OCnhxpuq8phln4f2iBVzt3hKl+MS6YftS+j1hmMMI3p0dQDc7QK8oZi0o3hWFJjkgSJ/jZLphLVJ9npG0V1Yb8xPXVn9GwL2IljBOQUaKs6fVZLrp/CpWVk4+Er1PiZq3Gxp6tV3Saa7BoqWHEpx8BTa+umkbslhtqpGlqWS8k1NJ3W+aJxWbvM9FRwSOsGgOvfdY6q9cWtDS7N/AHcE5V/sZ5WqLLKqqw1oG823aKllqHPOahlqL7zmnsdlkM9U/coLgyP8AaWWSxNREVOCoYYjvR8DbLnX2sLoc2KyimOSllcoXOusTkW+SuniJVJiFOTkAtaI7oGppi03t9EiN+2QOwz9JhzDxz5rjsD7wIt5gq9bSNPJTx0Q5LcvyiiujZCxYxghw2giY3v2cTw0UNVh7XG7Bs+ZurEQNC6QAFnv/ACLs4SKnPcsYKOOis8a3XoGBRGwy0WVay7wt5g8BDL24LlayxySTBojjJU40+1wsRV05c4rY41Jdx4Ks7O1ymms8ayXbHcZ5+G35c0+PAWua7vXNsuAV/wBkIGqb2PQkLpafXxh/ZZJWox7RhZsOlY7K/kbn1RlHh0h3kha7sMgzBv8AVQSUcp5eQsuh/wBHTSXI/wDjMtVQvbvzUlLEd9loG4Zf9SnFI3cAsOo1dTf8aMllUHLMSm6vySV9+Gnw/RJZPYQPjMgzpe8/42p/5wP7Q91mIwnuC9f4Yj/IzTN6Zgb4vqrTAsf7S8tERAAu517hoXn7wt70cpRBS3P65c+YCbXposTbe4otHVDNruD14oOulGiHjdY7055usdsGp4Ep55ZFshEx2sonZBJjuKqxYQUSwiKKjcgYajUIyJ4K5VpbHShQ7YUzghpAsrkUTxyBElzXBVYdZStesdkOcj4tfIb2Jvku9g5pkEh4oyN91mlKS+RqigM0oCEqXAK2e1VM+yHZnijqbbAmsFjgNCXm5C31JDssssnhVWxrRmFdyYu0M/UCs9jcpDoJJFJjIZtHgqpoVi+aOV+ZXaijbfIq09qwC+wZiT4b7kOHlrrFGwvuFJZjyWkmQshk4KYRSaIqJ1lMZSg3smwrWULnb8kdTULW71FLVEId9ap+zJhIt9lq6qPtZSVeORMo8IdXvOgTDWv1UpoyuGiK+j70LcWOoZHPka2+9zR9V6NjNTs7DRuaGj6LD9HaAmoj/wBgfYrV4yO8U7ybYcGWxZY9tQDuRVMeKrMKbtOIVq1uyEMKt63Cm8M5M5KIqNz10OWS9DIBjCLImGRVQep4ZVy7IB4LkFNeEK2ZStkWCxYKGStTWlSPKaGrK2WgiJyMp3IAGysKOyzWD4Mlkadk2WExp8jHEnVb6WYBUGKRNfvCZorNkuUBesrgoaHGjayOGLEjMqsfhYBuLqdlGAulOFT5RmjOfRyXFpGm8bSUdSY/If1gjzXIaW/BFxYa0780qcqcYcRsZSDqKQzHLNW0DHNyITsHpmsGQVlIAuTbYm8Lo1wXBAEySVTFQPakZ5DApSoCURLootlPTFSZHdJSWSV5AyeSCJcMXkr00DdFx1I0cAvbKazg0Nneh1NaR0htZjT7lOr5LuJ5lWEbWxU5tkZDfna6pJpE+2WIYOf/AGnknwqa0lldVTrLN4fHd21e1leVD7i616SWYYE2x/YhMiQlQ7nLm2s98RsGGiRSslVaHKQS81zpwGFoJ1LHOqjrU4TlYbq8lMvGTBSNcFSx1KKjqFz50soswimy2CrRKo31RCR4mwt2A6Wpsh3Puq6SaQnJvum9TMdx2U+NKS7wBlssNjhkumiVeKGbftE+6lbHUDIK3DHUkGo/4WkdPYKRj7KnEFSdU8OqGb23/tLdOflBbWujRQ1duKJFcsoa5/xMcFLDiQ43SZaVk8mDVtqbhRveqmCtBRQluszqcQ42ZJ3FdyQ7nc1EZuatQZHIMySQPahqki8bB3IzoA4hStjBIGza5GarmYlMDfuH0Vng2ISOcS/Zs0E+ZXtY1rsbZOxIC6Qy9/YG5osqCd18gja+QueXEbyT9VFQNBkva+z3iENsucCIItaCnDGi/K6kkI3KePFWWzhz1BCFlxEXyh9bpuns2MKcHJdAk7bKIoku2uFlBI1bp4msoz7XF8kW0ltLjgoyufZEdEmEicHoa6cHLJKITiFMkU0c6ADk7aWeVaYtrBe09SLIxjgVnIpEbC8lYrKcAbi6uAFA6TRQQscUVHRE70hpR7CTbGR1TtycKt/NGRYYOJKk/DW+IpTsrGJSBI8QeFKzESd6nOGgjJxQk1A5u7NUnXImZoJHeUb6VugULQ4cFI154qYa6ZQuoAzCmE4AULpAhZCoouXYPQW+oQ8s4QUspQ7pSnRpKcg7r0lX7aSZ4iZIeqR9E0NjeeJ7qh2BqiJG7MYzvc3XoodG7UcIrKvdmo+j7bmY/wAf/q7XOyUnRqPuTO1s0JM2IqXKH9Sl1SKEJ1S6lypM3goiKT4skV1LtFwxO0TYXSiLspUyqexROYrV9I48ELJTkcEyUlIxyqcQItKVlM5q5srNIiIrLrQpA1c2ElkccjmI6mlCA2SutJCTZDchTgaCCpCsYKtZZk1kZDVrDZpydGoZVhT9e1ZgVqcK5ZXpmGpmmFU3gkakLNdvK4cQ5ofVZN5fVEoKr5igPxBMdXpsaJIGUsksj1C+ZDy1YQz6i61QqYrJPNKhy9ROlURetEawlHJP1qSGuuo/GHtLx0QTsQyYwDzTblcxE/pvoulW/wBTVqior35KxwWAiAfycXegVTX52Gpt7rRZsDGDc1o9yEiRVERnVFdMJ5p3WuTmyFCbcDBG7VKzuala8p+0rIQd5T0LS6RoIuCcwUtockbg4Blb6ptKzLkVfxEqsapGtkNhZVjgBvNleYq673eay2NuysiuS3YRzqmGOYmbKpMKEjpWta478xwstpJhzTuyWaccGmMHLoprJbKsnYa5QuoXjgUtlupgRakAUQYTxBXdgIGgHWC5gp4eVNsXXOrVbQPERF5TS9TdSkYuSm1E8QNtLoBRAp1xrFeETxA3Vld2EW4BM6sngrLVIMQuWRzKMngjsPwnbe1pNgTvG9HFNvCLcHHko7JLa/lVvjPsEk7wTF70C7HIKuxdvftoAFr5KNgBOyMs1jMQJc4lPgv1yO1Uk5YRXU8PWTMbo659CtPIxpO5VHRWnD6oA+Fy178LbqQs0pcjtPgpBE1O6hqtvwseIrrMHv8AGfZDuNeSnMIS7ONVdHBT47+iifhjhxCm4rKKrsY1RmFU+w4u0af6RH4e/wDipG0zo2PLrbrZJ1MuTNqZLYZ+rdmSsjjkveWlrJN+ax2IyXf6pkuZHPrRf9C6O5c+18rDzWm7M9QdG6EsgbZpzzJVmWuHByzSfJ1aFhAZhemmN/NGkka+ybt8/ohyPwBOa/T6JvVHi0eyses5pdZ5KA7EVj4B4VE6kGiudo8k63IKsFbIlE2ksndnV0WcgkIhoFMInjiUvZeRTm0f8fdXQaNEtlQnjRUilPhTxAdFZhq4rL2oq3RHRS0l2vaQOIR5CQ9EyprcKthmLLq6SH7QurpZOX4mZWmks0uJNgLDM70CyTaOaGixLbhHd2bm9k6CQX80vULERabcslphUggkErRcjVaOpmdUMMtM8h7f1wm1+eysqxHUEzo5GyMNrHMDiNFzU1nLHRm0M/G523BPncDIrn5hm1b7Kx6Y0sYYKtnda7KRvBrtVkW4pAfjatcIRksoPyP7L8dJ5dG+yf8AmaTwNVC2thPxt91KJ2cHN9wi8KJ5GXR6SP8AAPdGR4wZYn3bs2Wc6xvBw9wie2bETgDvI9lca1HoCycmitxObIrN00G3M0HW5VjilXdN6NtvK4ngLhBzkGHB6FTY7ExjWWdkLZblL+PwnUeYWZcVG6Q6IfAmaVc0a9uMU5+MeoK7+JU/jasDLFM45WYFNDQWzLiVPXQa1DRvG1MB+Jn0UgfAeLPosM6IBcB81T04XsM3ZZD/AB90zqI9B7rDEnUqCSsc343el1Xrstag9B7Mzn7pppG6lYSCulP6XvRTa6f9xyr12T2DYGjGpTew/wAlkxik4+Mp5xuoHxX9Aq8EgvZRq2UBPxJzsNd4gfRZNvSGoGnsFIOlE43tBVOiRfsI0jqB+oTTRP1CoW9LJeLAu/m54/x/VRUzRHfFpmh7O/kks9+b3ftpLTtmZN6MvSgdU3kB9VK11nBQyygEt3C1gomygEZ+qdqP2SMkUzTzOIZexKqI8X2HfdaDD6+PqxmDyyVH0gp45ngjuW8OQK50a8vDDwafDMSbUwvgdYiRpaAfhdbIryfF8Okp5HRyN2SDloRwIWsw6bszhndHY84VsdiAHN/RIbbVloqzW8F4PN7pXV8ejbvGFG/o6/g5p9V0FKJeCkL3an3K0nRqMvjlJJNgLXJKBfgEv8T6q5wWkfDDJt2G0QBY3yVpxwVLorao3KhjqXMa9zTY5I2rZoqp0TjdoBN+CxL+wR1uNTj4yfRPb0gnHxA+gQRpX+F3sU0wu8J9itSUSFo3pJP/ABPopW9KJfC0+4VJsHQ+y5ZFhFGhb0qfxjHunt6VDjH9VmwEiFW1F5NSzpPGd7HD2V5G8OANhmLrzoBb2ld3G+QS5xS6LQWCBuCGqMSijNnmxTw7msv0jN3n0QxWS2aBuNQeMKVuJw+NpWAskAmeMA9DbVxnc4fRdMrdQsXTuyTKtx1P1U8aK3PJuARyXCBp9V58JXjc53uURBVSXA23cBvOqpQLZv8AsrUlW3f4vqkj2isMz7t6TUkkqQ861O+y4kkrsr5E9dSSRT7CQ1qcFxJM+AmJyadx811JEugWNC4z9SSSVHsg9Ibkkk0s4uJJIkUxhTUklZTEEQkkhkEh2igm3riSGPZbGpy4kmADuCa5JJWCcC63ekkqLQckkkoUf//Z";

  return (
    <div className="flex md:flex-row  flex-col">
      {/** Songs  */}
      <div className="flex-1">
        <span className="dark:text-white font-bold text-base">Songs</span>
        <div className="grid grid-cols-2">
          {[1, 2, 3, 4].map((elements) => (
            <button
              key={elements}
              type="button"
              className="flex space-between dark:hover:bg-gray-800 hover:bg-gray-100 p-4 text-left space-x-3 focus:outline-none"
            >
              <div>
                <img src={image} alt="preview_image" className="h-auto w-10" />
              </div>
              <div>
                <span className="dark:text-white font-semibold hover:underline block">
                  Superman
                </span>
                <span className="dark:text-white font-semibold hover:underline block text-sm">
                  The Eminem show
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/** Albums */}
      <div className="flex-1">
        <span className="dark:text-white font-bold text-base">Songs</span>
        <div className="grid md:grid-cols-2">
          {[1, 2, 3, 4].map((elements) => (
            <button
              key={elements}
              type="button"
              className="flex space-between dark:hover:bg-gray-800 hover:bg-gray-100 p-4 text-left space-x-3 focus:outline-none"
            >
              <div className="h-auto w-auto max-w-">
                <img
                  src={image}
                  alt="preview_image"
                  className="min-w-full min-h-full"
                />
              </div>
              <div>
                <span className="dark:text-white font-semibold hover:underline block">
                  Superman
                </span>
                <span className="dark:text-white font-semibold hover:underline block text-sm">
                  The Eminem show
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  sTerm: PropTypes.string.isRequired,
};

export default SearchResults;
