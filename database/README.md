- .gitignore :  ถ้าเอาชื่อไฟล์ไปใส่ในนี้มันจะไม่อัพไฟล์นั้นขึ้ร git ให้

# Get started

- Make `.env` from `.env.example`
- `docker compose up -d`

# User management 

- `docker exec -it ws-db bash`
- `psql -U postgres -d mydb`
- Don't forget to change the password.

```
REVOKE CONNECT ON DATABASE mydb FROM public;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
CREATE USER appuser WITH PASSWORD '1234';
CREATE SCHEMA drizzle;
GRANT ALL ON DATABASE mydb TO appuser;
GRANT ALL ON SCHEMA public TO appuser;
GRANT ALL ON SCHEMA drizzle TO appuser;
```
