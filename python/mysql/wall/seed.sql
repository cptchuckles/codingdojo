/*
    all user passwords are `asdfASDF1234?`
*/

INSERT INTO `wall_schema`.`users`
    (`id`,`first_name`,`last_name`,`email`,`password_hash`,`created_at`,`updated_at`)
    VALUES
    (7,'cpt','chuckles','cpt@chuckles.lol','$2b$12$fu8y5OVP46C91M.PKW5jg.7FY5IzUwhDfMoq60YpuM62g..xUc3c.','2023-11-08 21:31:31','2023-11-08 21:31:31'),
    (8,'john','sekiro','john@sekiro.kill','$2b$12$Rjenv.BkQ9vwue6Xk1TtPeEJ9DgMP5FjFOpeYJOmG1YRsBs/q/uXG','2023-11-08 21:32:05','2023-11-08 21:32:05'),
    (9,'jack','eldenring','jack@elden.ring','$2b$12$KZYUzPoc/x8xLfHm1i/koeC6O4sUTkHtRFXZ8PkaqP94nFnSpNLom','2023-11-08 21:33:37','2023-11-08 21:33:37'),
    (10,'lenny','face','lenny@face.com','$2b$12$qJD/DPa5Fjo4y0nLGVtiHOBMKYqcoyzKcXekGxkEw/qoClyxJYRe6','2023-11-08 21:35:18','2023-11-08 21:35:18');

INSERT INTO `wall_schema`.`messages`
    (`id`,`sender_user_id`,`receiver_user_id`,`message`,`created_at`,`updated_at`)
    VALUES
    (1,8,7,'you suck','2023-11-08 21:32:10','2023-11-08 21:32:10'),
    (2,7,8,'uh no u','2023-11-08 21:32:25','2023-11-08 21:32:25'),
    (3,9,7,'i am jack you are lame','2023-11-08 21:34:50','2023-11-08 21:34:50'),
    (4,9,8,'i am the jack of the dark souls prepare to cry','2023-11-08 21:35:03','2023-11-08 21:35:03'),
    (5,10,7,'( ͡° ͜ʖ ͡°)','2023-11-08 21:36:15','2023-11-08 21:36:15'),
    (6,10,9,'( ͡° ͜ʖ ͡°)','2023-11-08 21:36:16','2023-11-08 21:36:16'),
    (7,10,8,'( ͡° ͜ʖ ͡°)','2023-11-08 21:36:19','2023-11-08 21:36:19'),
    (8,7,10,"shut up nerd don't look at me like that",'2023-11-08 21:36:40','2023-11-08 21:36:40'),
    (9,8,9,'STOP STARING AT ME','2023-11-08 21:37:02','2023-11-08 21:37:02'),
    (10,9,10,'ASL','2023-11-08 21:37:35','2023-11-08 21:37:35'),
    (11,9,8,'what are you talking about','2023-11-08 21:38:48','2023-11-08 21:38:48'),
    (12,8,9,'sorry i clicked on the wrong box i meant to send that to lenny','2023-11-08 21:39:15','2023-11-08 21:39:15'),
    (13,8,10,'GO AWAY NERD','2023-11-08 21:39:33','2023-11-08 21:39:33');
