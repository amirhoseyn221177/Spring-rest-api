package springreact.practicerestapi.services;


import org.springframework.stereotype.Service;
import springreact.practicerestapi.domain.Project;
import springreact.practicerestapi.repositories.Projectrepo;

@Service
public class ProjectService {
    private final Projectrepo projectrepo;

    public ProjectService(Projectrepo projectrepo) {
        this.projectrepo = projectrepo;
    }

    public Project saveourproject(Project project){
        return projectrepo.save(project);
    }

}
