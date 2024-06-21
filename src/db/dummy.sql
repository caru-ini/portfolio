DROP TABLE IF EXISTS posts;
INSERT INTO posts (title, content, createdAt, updatedAt) VALUES ('Dummy Title 1', 'Dummy Content 1', '1620000000000', '1620000000000');
INSERT INTO posts (title, content, createdAt, updatedAt) VALUES ('Dummy Title 2', 'Dummy Content 2', '1620000000000', '1620000000000');

DROP TABLE IF EXISTS tags;
INSERT INTO tags (id, name) VALUES ('tag1', 'Dummy Tag 1');
INSERT INTO tags (id, name) VALUES ('tag2', 'Dummy Tag 2');

DROP TABLE IF EXISTS postTags;
INSERT INTO postTags (postId, tagId) VALUES ('Dummy Title 1', 'tag1');
INSERT INTO postTags (postId, tagId) VALUES ('Dummy Title 2', 'tag2');