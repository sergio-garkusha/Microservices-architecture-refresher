Based on the course on [Educative.io](https://www.educative.io/courses/build-microservices-web-apps-with-rabbitmq-react-tsx-and-django/)

## My Goals

- [ ] Refresh Python & Flask
- [ ] Try out uv, a poetry-like modern dependency manager for Python
- [ ] Try out Django once again
- [ ] Refresh RabbitMQ and try it as a standalone service
- [ ] Manage services using docker-compose written from scratch
- [ ] Prove myself through the course assessment, and go beyond it

## My Adjustments

- I managed everything in one docker-compose file, while course authors use separate files for each service
- I've used latest versions of everything: MySQL, RabbitMQ, Django, Flask, and Vite as a replacement for create-react-app
- I've added uv as a dependency manager to all python services, course uses pip and requirements.txt
- I've called went with services/backend and services/core structure, course uses src/backendservice1 and src/backendservice2
- flask_scripts are in the course, but they are obsolete since introduction of the flask CLI
- instead of `python manager.py <command>`, I use `fask <command>`, e.g. `flask db init`, instead of `python manager.py db init`

## Future Improvements

- Replace Flask with FastAPI
- Replace Django with Nest.js?
- Replace Vite with Next.js
