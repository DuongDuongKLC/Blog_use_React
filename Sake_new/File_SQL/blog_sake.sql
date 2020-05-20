-- MySQL dump 10.16  Distrib 10.1.26-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: www
-- ------------------------------------------------------
-- Server version	10.1.26-MariaDB-1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `felt_text`
--

DROP TABLE IF EXISTS `felt_text`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `felt_text` (
  `stt_felt` int(11) NOT NULL AUTO_INCREMENT,
  `id_felt` varchar(50) NOT NULL,
  `likes` int(10) DEFAULT NULL,
  `dislikes` int(10) DEFAULT NULL,
  PRIMARY KEY (`stt_felt`,`id_felt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `felt_text`
--

LOCK TABLES `felt_text` WRITE;
/*!40000 ALTER TABLE `felt_text` DISABLE KEYS */;
/*!40000 ALTER TABLE `felt_text` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sake_connect`
--

DROP TABLE IF EXISTS `sake_connect`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sake_connect` (
  `stt_connect` int(11) NOT NULL AUTO_INCREMENT,
  `id_connect` varchar(50) NOT NULL,
  `id_user` varchar(50) DEFAULT NULL,
  `id_status` varchar(50) DEFAULT NULL,
  `id_felt` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`stt_connect`,`id_connect`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sake_connect`
--

LOCK TABLES `sake_connect` WRITE;
/*!40000 ALTER TABLE `sake_connect` DISABLE KEYS */;
/*!40000 ALTER TABLE `sake_connect` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sake_felt`
--

DROP TABLE IF EXISTS `sake_felt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sake_felt` (
  `stt_felt` int(11) NOT NULL AUTO_INCREMENT,
  `id_felt` varchar(50) NOT NULL,
  `likes` int(10) DEFAULT NULL,
  `dislikes` int(10) DEFAULT NULL,
  PRIMARY KEY (`stt_felt`,`id_felt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sake_felt`
--

LOCK TABLES `sake_felt` WRITE;
/*!40000 ALTER TABLE `sake_felt` DISABLE KEYS */;
/*!40000 ALTER TABLE `sake_felt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status_sake`
--

DROP TABLE IF EXISTS `status_sake`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status_sake` (
  `stt_status` int(11) NOT NULL AUTO_INCREMENT,
  `id_status` varchar(50) NOT NULL,
  `title_status` text,
  `data_status` text,
  `url_picture` text,
  `date_status` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`stt_status`,`id_status`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status_sake`
--

LOCK TABLES `status_sake` WRITE;
/*!40000 ALTER TABLE `status_sake` DISABLE KEYS */;
INSERT INTO `status_sake` VALUES (1,'ad71e1d7','Thresh - Cai Ngục xiềng xích','\nXin chào chế đây \' Kẻ lắm chuyện \' của mọi người đây , hôm nay tôi ổn và đang đau mấy ngón tay vì bấm qúa nhiều . Nhưng vẫn có viết vài dòng chia sẽ nak . Thresh - vị tướng liên mình huyền thoại mà mình khá thích !!! . \nxin điểm qua cái lịch sử tướng nứng phọt nước về thresh nha , cái cốt truyện khiến mình cảm thấy chất lừ của vị tướng này : \nThresh là một linh hồn tự hào với việc tra tấn người sống không ngừng nghỉ, khiến họ suy sụp bằng sự hành hạ chậm rãi và đầy sáng tạo. Những gì nạn nhân của hắn phải chịu đựng còn vượt xa cả cái chết, vì Thresh gieo rắc nỗi thống khổ lên linh hồn của họ, cầm tù họ trong chiếc đèn lồng của hắn để vĩnh viễn giày vò.\nTrong một thời kỳ lịch sử đã bị quên lãng từ lâu, kẻ sau này được biết đến với cái tên Thresh từng là thành viên của một tổ chức hiến mình cho việc thu thập và bảo vệ tri thức. Những thủ lĩnh của hội giao cho hắn nhiệm vụ canh giữ một hầm ngầm dưới lòng đất chứa đầy những tạo vật ma thuật nguy hiểm và những cổ vật ma pháp bị hủ hóa. Thresh sở hữu đầu óc mạnh mẽ và có phương pháp, khiến hắn hoàn toàn phù hợp với công việc này.\nCăn hầm đó được chôn sâu bên dưới thành phố, nằm ở trung tâm một hòn đảo và được bảo vệ bởi những ấn ký cổ ngữ, những chốt khóa bí mật và những lực lượng canh phòng hùng mạnh. Trải qua một thời gian dài giữa dày đặc phép thuật đen tối, Thresh bắt đầu bị ảnh hưởng khi chúng chạm đến tâm ma của hắn. Hàng năm ròng, những cổ vật ám ảnh hắn, khơi gợi những nỗi sợ hãi thầm kín nhất của hắn và nuôi lớn nỗi đau trong hắn.\nÁc tâm của Thresh tăng dần qua những hành động đùa nghịch tàn nhẫn, với tài năng khai thác sự yếu đuối của kẻ khác. Hắn từ từ xé từng trang của một cuốn sách sống, rồi gắn chúng lại khi tất cả chỉ còn là một đống vụn nát. Hắn cào lên mặt gương kết nối với ký ức của một pháp sư cổ đại cho đến khi nó mờ đục, đánh bẫy người đó giữa bóng tối, sau đó đánh bóng nó như mới và lặp lại. Một bí mật muốn được thổ lộ, một phép thuật không muốn gì hơn ngoài việc đưa phát ra, và Thresh ngăn nó làm thế mỗi ngày. Hắn sẽ bắt đầu ngâm nga câu thần chú, rồi để chính những từ ngữ đánh lừa lưỡi hắn, và dừng lại ngay trước khi âm tiết cuối cùng bật ra.\nHắn trở nên cực kỳ thành thạo trong việc che giấu mọi bằng chứng tội ác, đến nỗi mọi người trong tổ chức đều chỉ coi hắn là một người bảo vệ mẫn cán. Căn hầm càng ngày càng được mở rộng, duy có Thresh là hoàn toàn nắm rõ những thứ chứa trong đó, và những cổ vật yếu kém hơn biến mất dần khỏi trí nhớ các thành viên trong hội, cũng như của chính Thresh.\nHắn bất mãn vì phải che giấu công việc tỉ mỉ của mình. Dưới con mắt của hắn, tất cả đều xấu xa, hoặc phần nào đó thối nát – tại sao hắn không được tự do làm những gì mình muốn?\nCăn hầm cất giữ nhiều bảo vật kỳ lạ nhưng lại không có người nào, cho đến một ngày một kẻ xiềng xích khắp mình bị đưa vào trong đó. Hắn là một thầy phù thủy đã dung hợp ma thuật vào cơ thể mình, cho hắn khả năng phục hồi bất kỳ vết thương nghiêm trọng nào.\nThresh rất thích thú trước kẻ mới tới này – một sinh vật có thể cảm nhận mọi cung bậc nỗi đau của con người, nhưng lại không thể chết, một món đồ chơi cho hắn giày vò trong nhiều năm tới. Hắn bắt đầu hành hạ thầy phù thủy bằng một cái móc, và dùng xích sắt để quất và xé toạc vết thương ra đến khi nó lành lại. Hắn bắt đầu mang theo bộ dây xích trên người khi đi tuần quanh căn hầm, tận hưởng nỗi sợ của thầy phù thủy khi hắn tiến lại gần với những tiếng kéo lê dài đầy đe dọa.\nVới đối tượng mới để thỏa thích hành hạ, Thresh ngày một xa lánh tổ chức trên mặt đất. Hắn bắt đầu dùng bữa trong căn phòng ngầm chỉ le lói một cây đèn lồng, và hiếm khi rời khỏi vị trí. Da hắn nhợt nhạt đi vì thiếu ánh nắng, và khuôn mặt thì hốc hác như chỉ còn da bọc xương. Các thành viên của hội tránh xa hắn, và khi một loạt những vụ mất tích bí ẩn xảy ra trong tổ chức, không ai nghĩ đến việc điều tra hang ổ của Thresh.\nKhi thảm họa được biết đến với cái tên Đại Suy Vong ập xuống, các đợt sóng chấn động ma thuật cướp đi sinh mạng của tất cả những người sống trên đảo và biến họ thành xác sống. Trong khi những người khác gào thét vì thống khổ, Thresh lại thỏa thuê giữa đống tàn tích. Sau cơn tai ương, hắn xuất hiện dưới dạng một bóng ma quái dị, nhưng không giống những người bị đưa đến thế giới bóng đêm, Thresh không hề mất đi đặc tính của mình. Trái lại, thiên hướng về những trò hành hạ tàn nhẫn và khả năng phát hiện yếu điểm của hắn lại càng mạnh mẽ hơn.\nHắn thích thú trước cơ hội được tiếp tục những hành động bạo tàn của mình mà không sợ bị phát hiện, được giải phóng khỏi những ràng buộc của nhân tính. Là một ác ma, Thresh có thể không ngừng tra tấn cả người sống lẫn kẻ chết, vui sướng trong nỗi tuyệt vọng của họ trước khi đưa linh hồn họ vào cõi đau đớn vĩnh hằng.\nThresh giờ chỉ săn lùng những nạn nhân đặc biệt: những kẻ thông minh và mạnh mẽ nhất, và những kẻ có ý chí sắt đá. Niềm vui lớn nhất của hắn là giày vò nạn nhân đến khi họ mất đi mọi tia hy vọng, sau đó đối mặt với sự trói buộc định mệnh trong xiềng xích của hắn.','/picture_status/thesh_c.png','2020-05-14 22:07:50'),(2,'78deb5d6','Hệ điều hành Kali linux','\nHello mấy chế  , mình đây \' Kẻ lắm chuyện \' của anh em đây . Anh em thấy lạ khi nay ngôi xưng của mình thay đôi không , đơn giản là mìnnh đau họng nói không ra tiếng :Đ . OK thôi đi vào vấn đề chính , mình muốn giới thiệu cho anh em một hệ điều hành khá lạ \' Kali linux \' , có thể nó xa lạ với anh em không học lập trình nhưng ai học công nghệ thông tin đêu biết nó cơ mà số người dùng nó thì ít lắm anh em đơn giản vì nó không đẹp như window nhưng tin mình đi \' Kali linux \' thực sự rất tuyệt anh em . \nMình không muốn nối đến cách cài đặt nó bởi có vô vàn trang trên internet chỉ nak , mình chỉ muốn dành cho bạn nhưng lời khuyên của một thằng có cảm tình với hệ điều hành này thôi nhưng tốt nhiên mình sẽ cho các bạn link file ios của nó . Mình sẽ để hai đường link này cho mọi người nếu đến một lúc nào đó ai có hứng thì nhớ truy cập vào link mà tải những thứ cẩn thiết . \n https://drive.google.com/file/d/1XbAY3-dwheogz6EuVYd_hqoZz7MIFbsv/view?usp=sharing \n  https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/ \nSau đêy là lời khuyên của mình : \nDùng bản ios 2017.3 mà mình share trên bởi bản này sẽ không gặp lỗi máy không nhận boot qua USB , những bản khác không hiểu sao hay gặp lỗi này lắm .\nSau khi cài đặt các bạn đừng dại nghe theo lời khuyên \' 10 điều phải làm sau khi cài đặt linux\' đi , nghe mình . Đầu tiên không bao h được dùng lệnh \' reboot \' và \' sudo apt-get upgrade \' vì sao ư , reboot nhiều lúc sẽ xoá mất data và dính lỗi \' vòng lặp vô hạn \' khi đăng nhập user trên kali linux . Còn lệnh còn lại là nâng cấp toàn bộ gói tin có trong hệ điều hành , đừng dại nó sẽ set lại bộ khởi động và cổng kết nối cũng như drive hiện tại sinh ra lỗi ăm thanh , không kết nối được mạng wifi ,.. tùm lum thứ . Đừng nghĩ đến việc fix chúng , rắc rối thấy mồ đi . Hãy khôn ngoan chỉ dùng lệnh \' sudo apt-get update \' . Tiếp là file sourelist \' nằm ở thư mục apt của hệ thộng \' xoá file đó đi và thay bằng file này nha . và dùng lệnh \' sudo apt-get update \' trên terminal . \' https://drive.google.com/drive/folders/1F7vo52PH6OeMlYGFKGPT8dTBAYeQ84TY?usp=sharing \' , vậy bước đầu tạm ổn nha .\nNếu anh em dùng để học mấy môn và muốn trải nghiệm nó các bạn dừng lại ở việc tải gói tin \' libc6 \' cho hệ thống vậy là ổn . CÒn muốn dùng nó luôn như mình thì ngoài libc6 các bạn cẩn thứ này . À quên cú pháp \' Sudo apt-get install libc6 \' và chờ cho hệ thống tải và cài đặt là ok nha . Mạn phép anh em giới thiệu qua về cách mà hệ đều hành nó tải và cài đặt , windown có file .exe để  cài phần mềm linux có .deb , .rmp ... ngoài ra linu còn có hệ thống OTA khá lớn giúp bạn tải và cài đặt những phần mềm về máy ngoài việc tải và cài như window . Tất nhiên cách cài cũng dùng bằng lệnh trên terminal thôi , không qúa khó anh em chủ yếu là \' Sudo apt-get install -tên gói tin \' đối với việc tải qua OTA , và \' dpkg -i file.deb (.rmp ) \' với việc tải về qua mạng và cài . Nghe có vé rắc rối , nhưng thực chất khá tiện nếu anh em quen nak .\nTiếp là  cài chrome thay cho firefox bởi dùng firefox tù vãi ra , trang chủ của chrome có cung cấp file .deb của chrome nên thoải mái mà tải và cài , dùng lệnh \' google chrome table --no-sandbox \' mà khởi động khá bất tiện nên mình khuyên nên cài phím nóng khởi động chrome nak , của mình phím nóng là \' Alt +c \' anh em . \nCài unikey , mình quen dùng keyboard hệ thống cung cấp nên khỏi , nhưng mọi người có thể tải về  nak OTA của linux có cung cấp gói tin này  . \ncác bạn cũng có thể soạn thảo văn bản trên linux bằng libreoffice do microsoft cung cấp miễn phí và tượng thích với hệ điều hành này và đây là trang chủ của để tải về , \' https://www.libreoffice.org/discover/libreoffice/\' . Nhớ cài gói gtk để hệ thống nhận diện nó \' sudo apt-get install gtk3.0\' và .... đọc kĩ file readme.txt trước khi instal không toang đấy .\nAnh em nghĩ linux chơi game ̣̣được không , có anh em ạ nhưng không phải liên mih chỉ chơi được dota2 và các game khác trên nền tảng ostream thôi ... Anh em nào có hứng thứ liên hệ face mình chỉ cho cách cài đặt , tất nhiên mình sẽ không đảm bảo hệ thống còn hoạt động ngon nữa hay không , mình chỉ đàm bảo game chắc chắn sẽ cài được và chơi ngon còn việc sau khi chơi tắt mát rồi ngày mai còn khởi động được vào hệ thống hay không thì mình không đảm bảo nha ... \nBài này đến đây thôi nha anh em , hẹn anh em trong những bài viết tiếp theo .. chế đi đây lạc la !!!','/picture_status/linux.png','2020-05-14 22:13:31'),(3,'87851d0b','Câu chuyện thú vị','\nXin chào anh em tôi đây \' kẻ lắm chuyện \' đây . Dạo này mấy chế  ổn cả chứ ? , Chứ tôi bây h đang ngồi hì hục viết từng dòng trong blog đây , đùa chớ đang nhớ tới gái anh em :Đ . Con trai mà thằng nào mà chả vậy cũng phải quen biết với gái chứ phải không , nói vậy thôi trước đây tôi nhát gái lắm bởi ngoại hình không được đẹp cho lắm mặt lúc nào cũng cúi xống vì thiếu tự tin cơ . Nhưng nay cũng đỡ rồi nạ , cũng tự tin hơn nhiều so với lúc xưa nên cũng đã quen được gái anh em ạ cơ mà quen biết qua loa vậy thôi chứ ít người để lại ấn tượng với tôi nhiều . Cơ mà mội chuyện thay đổi khi tôi biết đến níc face \' Hương Akily \' !! , Mạn phép xin được nó về người này nha anh em và cũng xin phép người có nick face kia bỏ qúa cho và đọc hết bài nha , và tôi không hề có ý xấu chi cả nha !!! . \nÀ đầu tiên thì bức ảnh bên phải không phải là hình cô ấy nha , chỉ lấy ảnh nữ của bộ anime ưa thích thôi (Dáng hình âm thanh) cho anh em nào muốn xem , hay lắm !! . Cũng muốn lấy ảnh thật lắm cơ nhưng sợ ăn gạch mấy chế :Đ . Nói sơ qua tí mình biết tới cô ấy nhờ một lần lướt face không biết mắt mủi sao lại thấy ngay \' Hương Akily\' trong group lập trình , đùa chứ con gái học lập trình kìa :Đ , click vô trang cá nhân , Ơ đệt có bạn chung cũng thích xem anime kìa , cùng quê nữa xi xi :Đ . Chôm ngay kết bạn nak , sau đó lân la vài câu bình luận sau đó bắt chuyện .. và giờ nó mình có học trò anh em ạ , tuy là hơi lười nhưng được cái tiếp thu cũng nhanh chứ bộ , mình học cả tháng mới hiểu hết mà chỉ cho ả thì ổn . Mà có dịp mình chia sẽ kinh nghiệm bắt chuyện được với ả cho anh em hấy :Đ . Đấy quen nhau là vậy đấy anh em , lắm lúc cũng tình cờ một cách khó tin @@@ . \nMất một khoảng thời gian khá lớn , cũng xẩy ra đủ thứ chuyện và tôi cũng dần dần mạnh dạn hơn trước nhờ đi làm mấy việc cùng với anh họ,.. bala bala . Đó cũng là lúc tôi có can đảm gặp ả ta ngoài đời tê , tất nhiên là lôi theo thằng bạn chí cốt mình tạm gọi thằng bạn mình là  \' Bất cần đời \' một phần là cũng ngại một phần là có người tài xế . Và rốt cuộc cũng gặp thôi anh em cụ thể là ba lầm nhưng chỉ có 2 lần gây ấn tượng khá mạnh anh em ạ ...hơ hớ . \nLầ̀n đầu : Mình không biết do hoàn cảnh sống hay do con mắt của mỗi người mà tôi có cách nhìn khá khác với số động anh em ạ m nói ra anh em đừng chử̉i tôi hay phê phá đấy . Cũng như mọi khi mình chỉ không dám nhìn thẳng mặt đâu , liếc 1 hai cái rồi lại cúi đầu xuống nhìn lung tung chỗ khác , ngại mà . À tất nhiên ả ngồi với bạn nữa cũng là gái nhưng giờ có chồng con rồi , haizz cũng lâu mình chưa hỏi thăm nak ... mà thôi kể tiếp cho anh em nghe . Thế là cố bắt chuyện anh em , thề cũng là lần đầu tiên ngoài đời mình cố bắt chuyện với một người con gái khá khó toàn bị hắt hủi không , cơ mà không sao mình cảm nhận không phải ả ghét mình ... hi vọng là vậy :ĐĐ . Haizzz kết qủa là mình bị xua ngay cả khi ra về cơ đấy  sợ thật . Cơ mà điều ấn tượng là cách ăn mặc của ả , không sa hoa mà bình dị qúa nak cũng đoán được là gia đình không có khá giả mấy và tính ả không có đua đòi gì nên ăn mặc vậy . CÓ thể anh em không có ấn tượng gì nhưng tôi ấn tượng khá mạnh đấy . Một chiếc áo khoác màu cam đã phai màu và hình như ả mặ hơi chật :Đ , đơn giản thật chớ ,còn nữa một chiếc vòng bằng đá , ha nếu nó là một chiếc vòng phong cách hiện đại chắc mình không để ý làm chi cơ mà anh em biết không , vòng mà thời 9x mới nhớ cơ . Tính mình thích dùng đồ cũ bỡi nhà mình cũng không khá giả là gì kiểu như gặp được người có một số sở thích giống mình ấy , ấn tượng làm sao ấy mấy chế @@@ . Thế đấy chỉ có hai thứ đó mà mình nhớ tới giờ ̣đấy , Không biết ả ta còn giữ chiếc vòng đó không biết nếu còn xin về làm kĩ niệm mới được :Đ ... \nLần hai : Và sau lần đó ấy , thì mói thứ như cũ thi thoảng tán chuyện cho vui không thì tìm cho ả vài tài liệu trên mạng , fix phần mềm cho ả  ... thoáng phá cả năm mấy chế . Và tết không xui xủi kiểu gì rủ được ả đi đến nhà bạn cuả ả , và tôi lại xi xa xí xớn đi thôi . Mà nghĩ cũng tội thằng bạn cái thằng \' Bất cần đời \' ấy , không biết là có ḅ chửi vì gái bỏ bạn không cơ mà cững lại được đâu mấy chế . Tắm rửa đi giày , thề ghé đi giày lắm cơ mà phải ăn mặc cho đàng hoàng để xứng với ả không gây ấn tượng xấu liền .. Bỏ thằng bạn ngay tại nhà lủi thủi chắc bảo \' Ngồi đây không thì ngủ giấc cũng được \' léo lên xe và đi , trước khi đi cũng không quên hỏi em gái anh ổn đúng ko ha ha .... Anh em biết gì không khá sốc anh em ạ , mình không mang mũ bảo hiểm vì nghĩ đội lên sẽ bị chê và trước giờ con gái ghét đội mũ bảo hiểm , em gái mình cũng vậy nên mình không mang nạ . Ai dè ăn ngay câu , \' mi mang mủ bảo hiểm không \', cái đệt đùa nhau à ả ta không ngại đội mũ bảo hiểm , ả không qua tâm đội mũ bảo hiểm là mất xỉ diện ,.. bala chỉ quan tâm an toàn và sợ công an chôm ... really china , sự̣ thật à .. ha ha  khá sốc , còn vặn vẹo bắt mình xi nhan tuýt còi các kiểu . Haizzzzz ấn tượng lắm ả ấn tượng lắm @@@ . \n Vậy thôi nhá anh em có gì mình sẽ nói tiếp .. h mệt quá làm giác nak ,.. Chế đi đây lạc la :Đ','/picture_status/akily.png','2020-05-14 22:21:05'),(4,'229422f9','Youtobe - thật tuyệt','\nChào anh em tôi đây \' kẻ lắm chuyện \' của anh em đây , như mọi khi lại hì hục viết những dòng blog đây . CÓ ai khi đọc tiêu đề mà thắc mắc \' youtobe \' có gì vui ??? ở đó có gì thú vị , căn bản youtobe là nơi tôi học từ nó rất nhiều kiếm tài liệu ở đó nữa . Vậy nên hôm nay tôi sẽ chia sẽ cho anh em ít kinh nghiệm giải trí và học trên youtobe có gì hay ho nha .  \nMọi người có để ý dạo gần đây kiếm tiền trên youtobe đang rầm rộ lên không , cụ thể là ngành streamer đại loại là tạo một kênh trên youtobe, hãy tưởng tưởng youtobe như facebook vậy cần tài khoản và có thế  phát trược tiếp và tết nhiên ai cũng có thể follow bạn . Chỉ khác là các đăng kí tài khoản khá phức tạp .\nCăn bản nghề này kiếm tiền theo cách này , một là phát trực tiếp đa phần là chơi game mua vui cho mọi người , càng hiều lượt xem càng tốt sau 2 , 3 tháng youtobe sẽ xác minh kênh youtobe của bạn có phải là bạn hay không và 1 mớ điều khoản . Đấy nếu bạn được thông qua sẽ được nhận tiền theo tháng , và ra video đang lên kênh của mình youtobe dựa theo lượt xem cuả bạn để trả tiền cho bạn . VÍ dụ nhá 1 view được 10 - 20 đồng và nhân với số view , đoán xem \' PSY - GANGNAM STYLE \' sẽ thu về  bao nhiêu anh woww . Cuối cùng là streamer thường có tài khoản playduo , nôm na là 1 tài khoản và fan của họ sẽ donnet cho họ lúc thì 10k  20 k để học duy trì sự sống trên mồm của họ hay cả chụ triệu nêu là dân chơi hay fan cuồng . \nVậy nên youtobe nàng càng nhiều kênh rầm rộ lên với thể loại , và có rất nhiều kênh chỉ kiếng thức . Nhưng anh em biết mình thích youtobe ở gì không , nó có ví dụ cụ thể ngoài những kiến thức cơ bản . Anh em thấy đấy tôi học trên này phần nhiều bởi vì thế , bởi nó cho tôi biết kiến thức đó dùng để làm gì và vận dụng nó hay mở rộng nếu muốn . \nCó 4 bước xem 1 video anh em nha : 1 làm theo video , 2 nhớ và hiểu nguyên lý hoạt động , 3 tự mình làm lại không nhìn video , 4 là vận dụng những thứ đã học được trong video và làm những cái khác . Vì vậy sẽ dễ  học hơn anh em ạ , mà nhác vãi ra @@ . Chưa hết dưới video có những đường link hay mã nguồn , coppy cũng được mà tham khảo cũng được . Vì vậ̣y tôi kkhá thích yìm nguồn học tập trên đây anh em ạ , không biết trong đây có ai như tôi không , comment để tôi biết nha !!! .','/picture_status/pog.png','2020-05-14 22:25:25'),(5,'6cc000a9','Cuốn sách - Con chó lạc đường','\nHello anh em chế đây “  Kẻ lắm chuyện ” của anh em đây, Dạo này anh em sao rồi ? không biết anh em có khoẻ hay không nhưng mình thì khá là no nước , tại vì mới vơ 2 qủa cam cộng với một chai number one … ôi cuộc sống có đồ ăn có đồ uống là nguyện vãi . Không vòng nữa như tiêu đề “ Cún con lạc đường “ cuốn sách đầu tiên mình đọc và đọc hết bởi nó khá hay đối với một người yêu thích động vật như mình … :Đ .\nĐầu tiên là mình đọc tiêu đề chắc liên quan đến một con chó bị lạc khỏi chủ nhà nên tìm đường quay về và tất nhiên sẽ gặp muôn vàn khó khăn rồi . Và ý như mình đoán mìh nghĩ sai hoàn toàn anh em ạ , một con chó bị người chủ bỏ rơi , ôi chu cha ôi nhẫn tâm vãi ra . Cơ mà cuốn sách này làm mình liên tưởng tới bộ phim “ Đi tìm nemo”, Chắc ai cũng xem qua rồi đúng không hay thế cơ mà , anh em tường tượng như thế này nha . \nCon cá nemo là con chó bị bỏ rơi đó và cái thằng cầm vợt cá đó là phụ huynh của con bé , con bé là chủ nhân con chó , nhưng bố mẹ nó muốn vứt bỏ nó . Thằng cầm vợt thì dụ nemo vào cái vợt của mình qua thức ăn , còn bố mẹ nó bỏ con chó theo cách này , bịt mắt nó lại bỏ lên xe ôtô chạy cả trăm cay số sau vứt nó lại và về . Đùa chớ sao lại nhẫn tâm vậy ta , mà kệ tiếp nào tất nhiên “ Đi tìm nemo” và cuốn sách tất cả các nhân vật đều hình tượng hoá biết suy nghĩ và có kết cục đẹp .\nCả hai đều có nhưng người yêu thương thực sự , với  “nemo” người cha là con cá hề luôn muốn bảo vệ nó bởi nó là đứa con cuối cùng còn sót lại sau khi một con bạch tuộc tấn công vợ ông và ăn hết số trứng chỉ sót lại một qủa trướng và sau này trở thành nemo , thì con chó có một cô chủ  nguyện bỏ ăn bỏ uống khi không có nó và chỉ ăn cái gì đó khi có nó cho dù gần đất xa trời anh em ạ , cảm động lắm . \nTất nhiên để tìm được đường về không dễ , gặp cả đống khó khăn nhưng cũng giống trong  “ Nemo” được rất nhiều người giúp đỡ hai cha con mới đoàn tụ và có thêm một người mẹ mới , đấy cái gì cũng vậy anh em ạ vào sinh ra tử mới có thành quả chui bờ rúc rào cũng phải tán được crunh nha mọi người . Chú chó cũng vậy cái kết vẫn đẹp cho nó , bạn bè của nó quen được trong chuyến đi về tới nhà chủ và trả thù anh em ạ , phá banh toành luôn nào là chim , chồn ,.. loạn nhà luôn . Nhưng con chó vẫn nhớ cô chủ phi lên lầu leo lên cô chủ , liếm vào mặt cô chủ , lúc này chủ nó mới nói với hơi thở yếu ớ “ Cún đấy à  , mẹ ơi con đói .. “ . Vậy đấy cô chủ sẽ sống và con chó được tè ịt thoải mái ở đâu nó thích .\nCuốn sách đầu tiên của tôi đó anh em , hay cảm động , mà thôi anh e nhớ tìm đọc hoặc xem \' Đi tìm nemo \' nếu chưa xem nha chào anh em chế đi đây  lạc la .. !!!','/picture_status/the_dog.png','2020-05-14 22:27:30');
/*!40000 ALTER TABLE `status_sake` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_sake`
--

DROP TABLE IF EXISTS `user_sake`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_sake` (
  `stt_user` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` varchar(50) NOT NULL,
  `user_name` varchar(128) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `gmail_user` varchar(128) DEFAULT NULL,
  `date_user` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`stt_user`,`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_sake`
--

LOCK TABLES `user_sake` WRITE;
/*!40000 ALTER TABLE `user_sake` DISABLE KEYS */;
INSERT INTO `user_sake` VALUES (1,'bd288df4','sake','rootsake','thelightofmylife98@gmail.com','2020-05-14 14:37:18'),(2,'dbc6f851','Kelamchuyen','123456789','kelamchuyen98@gmail.com','2020-05-14 14:38:09'),(3,'f3aa8b94','HoaAnhDao','123456789sake','wwwsake@gamil.com','2020-05-14 14:38:49');
/*!40000 ALTER TABLE `user_sake` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-20 17:55:41
