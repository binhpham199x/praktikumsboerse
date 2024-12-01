INSERT INTO "User" ("email", "hash", "role", "companyName", "firstName", "lastName", "description", "city", "createdAt", "updatedAt") VALUES
('admin@example.com', 'hashed_password', 'ADMIN', NULL, 'Admin', 'User', NULL, 'Admin City', now(), now()),
('company1@example.com', 'hashed_password', 'COMPANY', 'Company One', 'First', 'Last', 'Leading company in tech', 'Tech City', now(), now()),
('company2@example.com', 'hashed_password', 'COMPANY', 'Company Two', 'First', 'Last', 'Innovative solutions', 'Business City', now(), now()),
('company3@example.com', 'hashed_password', 'COMPANY', 'Company Three', 'First', 'Last', 'Expanding globally', 'Enterprise City', now(), now()),
('learner1@example.com', 'hashed_password', 'LEARNER', NULL, 'Learner', 'One', 'Passionate about learning', 'Student City', now(), now()),
('learner2@example.com', 'hashed_password', 'LEARNER', NULL, 'Learner', 'Two', 'Ambitious and driven', 'Student City', now(), now()),
('learner3@example.com', 'hashed_password', 'LEARNER', NULL, 'Learner', 'Three', 'Seeking opportunities', 'Student City', now(), now());


INSERT INTO "Internship" ("name", "description", "userId", "createdAt", "updatedAt") VALUES
('Internship A', 'Exciting tech internship', 2, now(), now()),
('Internship B', 'Marketing and sales role', 2, now(), now()),
('Internship C', 'Data analysis and research', 2, now(), now()),
('Internship D', 'Software engineering role', 3, now(), now()),
('Internship E', 'Finance and accounting', 3, now(), now()),
('Internship F', 'HR management', 3, now(), now()),
('Internship G', 'Product management', 3, now(), now()),
('Internship H', 'Web development', 3, now(), now()),
('Internship I', 'Project management', 4, now(), now()),
('Internship J', 'Cloud computing', 4, now(), now()),
('Internship K', 'Customer service', 4, now(), now()),
('Internship L', 'Technical writing', 4, now(), now()),
('Internship M', 'Business development', 4, now(), now()),
('Internship N', 'Graphic design', 4, now(), now()),
('Internship O', 'Cybersecurity role', 4, now(), now());

INSERT INTO "Application" ("message", "status", "userId", "createdAt", "updatedAt") VALUES
('Application for Internship 1', 'PENDING', 6, now(), now()),
('Application for Internship 2', 'PENDING', 6, now(), now()),
('Application for Internship 3', 'PENDING', 6, now(), now()),
('Application for Internship 4', 'REJECTED', 5, now(), now()),
('Application for Internship 5', 'PENDING', 5, now(), now()),
('Application for Internship 6', 'REJECTED', 6, now(), now()),
('Application for Internship 7', 'PENDING', 5, now(), now()),
('Application for Internship 8', 'PENDING', 7, now(), now()),
('Application for Internship 9', 'PENDING', 7, now(), now()),
('Application for Internship 10', 'REJECTED', 7, now(), now()),
('Application for Internship 11', 'ACCEPTED', 7, now(), now()),
('Application for Internship 12', 'PENDING', 6, now(), now()),
('Application for Internship 13', 'PENDING', 5, now(), now()),
('Application for Internship 14', 'PENDING', 5, now(), now()),
('Application for Internship 15', 'REJECTED', 6, now(), now());