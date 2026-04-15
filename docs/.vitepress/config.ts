import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Лекції з СКБД",
  description: "Навчальні матеріали для студентів",
  themeConfig: {
    sidebar: [
      {
        text: "Лекції",
        items: [
          { text: "Головна", link: "/" },
          { text: "Вступ до Баз Даних", link: "/lecture_intro_databases" },
          { text: "СКБД та Інструменти", link: "/lecture_dbms_and_tools" },
          { text: "MySQL: JOIN (Об'єднання)", link: "/lecture_mysql_joins" },
          { text: "MySQL: Робота з JSON", link: "/lecture_mysql_json" },
          {
            text: "PostgreSQL",
            link: "/lecture_postgresql",
          },
          {
            text: "MongoDB: Документи та Агрегації",
            link: "/lecture_mongodb",
          },
          {
            text: "MongoDB: Безпека",
            link: "/lecture_mongodb_security",
          },
        ],
      },
    ],
  },
});
