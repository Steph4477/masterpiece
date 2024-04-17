delete from merchants;
delete from products;

insert into merchants (siret, email, "password") values 
	('abcd1234567890', 'morelstephane@neuf.fr', 'wGK1kMdkcJn4NyP8CBzFo1udTiI0waaXHsrqGQNg8HuCtnB4Q8hYSqnb8K6u0YGEo2iPvM5M4ezoWPmAqpCngH'),
	('23456789012345', 'jane.smith@example.com', '3d9c6ad3b7ebe8ef6a7f16637f7f72043cf14c3af41c2e4c6e54bf2032f956bb'),
    ('34567890123456', 'alice.johnson@example.com', '3c83340ff4e4a32fc4c6bfa434d47a2a4007d5b083d22be0ec03beec96cb27f9'), 
    ('45678901234567', 'bob.brown@example.com', '6ccf254a61579efec6749d886a7d9d0fc7d46fb8e2f5e04d7f1408b39d4d1cf4'), 
    ('56789012345678', 'emily.davis@example.com', 'bca2f22dc9f53aa35f65310a22b5457e03efac1f5d26f1052a4188930e44b360'), 
    ('67890123456789', 'michael.wilson@example.com', 'a1c92a47d8c6d642fd0b27ad1d56d889be9f55f2b17db9753f59b6501b7cf4e7'), 
    ('78901234567890', 'sarah.lee@example.com', 'f6a85ee2736b6e0b170a8395750fe9e9b3b5d5e730b8b3ef48b3f6aa9816156b'), 
    ('89012345678901', 'david.moore@example.com', '75b969c65e9b8bb49717c7983ab8d184e8a3c4b3d2f87d3ee00efc7083076e8d'), 
    ('90123456789012', 'laura.taylor@example.com', 'de724cf8f7d4b26f0ecdb3e636a071e63b97b28ff19a7a9b56c65699e8c76de5'), 
    ('01234567890123', 'kevin.anderson@example.com', '00c32cfe2d11df18ee4dd5b21c4b7cbf4e8c73f6ebf6f276a79b9d23c2a028da'); 
    
insert into products (reference, name, description) values
    ('CD123456', 'Livre - Le Petit Prince', 'Un conte philosophique écrit par Antoine de Saint-Exupéry'),
    ('CD234567', 'Téléphone portable - iPhone 13', 'Dernier modèle de téléphone portable Apple avec des fonctionnalités avancées'),
    ('CD345678', 'Robe été', 'Robe légère et fluide parfaite pour les chaudes journées estivales'),
    ('CD456789', 'Ordinateur portable - Lenovo ThinkPad', 'Ordinateur portable puissant et fiable pour un usage professionnel'),
    ('CD567890', 'Chaussures de course - Nike Air Zoom Pegasus', 'Chaussures de course légères et amorties pour une course confortable'),
    ('CD678901', 'Roman - Harry Potter à école des sorciers', 'Premier livre de la série Harry Potter écrit par J.K. Rowling'),
    ('CD789012', 'Téléviseur - Samsung 4K UHD', 'Téléviseur haute définition avec une qualité image exceptionnelle'),
    ('CD890123', 'Jeans - Levis 501', 'Jeans emblématiques de Levis avec un ajustement classique et confortable'),
    ('CD901234', 'Fruits de saison - Pommes Granny Smith', 'Délicieuses pommes croquantes et juteuses pour une collation saine'),
    ('CD012345', 'Montre - Rolex Submariner', 'Montre de plongée de luxe avec un design emblématique et des caractéristiques exceptionnelles');

