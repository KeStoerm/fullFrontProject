import { Person, ShamePoint } from "@/types/types"
import { api } from "@/utils/gitUtils";

export const getShamePointsForMonth = async (): Promise<Array<Person>> => {
    const persons = createPersons();
    const pipelines = await getPipelines();

    pipelines.forEach((pipeline) => {
        if (new Date(pipeline.created_at).getMonth() === new Date().getMonth()) {
            if (pipeline.status === 'failed') {
                persons.forEach((person) => {
                    if (person.name === pipeline.username) {
                        person.shamePoints.push({date: new Date().toDateString()})
                    }
                })
            }
        }
    })

    return persons;
}

const getProjects = async (): Promise<any[]> => {
    return await api.Projects.all();
}

const getPipelines = async (): Promise<Array<any>> => {
    let pipelines = Array<any>();
    const projects = await getProjects();
    projects.forEach((project) => pipelines.push(api.Pipelines.all(project.id)));
    return pipelines;
}

const createPersons = (): Array<Person> => {
    const persons = Array<Person>();
    persons.push({name: 'Mika Theiß', shamePoints: Array<ShamePoint>()});
    persons.push({name: 'Maximilian Mittler', shamePoints: Array<ShamePoint>()});
    persons.push({name: 'Marcel Hencke', shamePoints: Array<ShamePoint>()});
    persons.push({name: 'Tim Niklas Brunnenkant', shamePoints: Array<ShamePoint>()});
    persons.push({name: 'Nils Metzner', shamePoints: Array<ShamePoint>()});
    persons.push({name: 'Kevin Störmer', shamePoints: Array<ShamePoint>()});

    return persons;
}
