INSERT INTO posts (title, content) VALUES ('Dummy Title 1', 'Dummy Content 1');
INSERT INTO posts (title, content) VALUES ('Dummy Title 2', 'Dummy Content 2');

INSERT INTO tags (id, name) VALUES ('tag1', 'Dummy Tag 1');
INSERT INTO tags (id, name) VALUES ('tag2', 'Dummy Tag 2');

INSERT INTO postTags (postId, tagId) VALUES ('Dummy Title 1', 'tag1');
INSERT INTO postTags (postId, tagId) VALUES ('Dummy Title 2', 'tag2');