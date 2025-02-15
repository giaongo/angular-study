import { Injectable } from "@angular/core"
import { NewTaskData } from "./task/task.model"


@Injectable({providedIn: "root"})
export class TasksService {
    private tasks = [
        {
          id: "t1", 
          userId: "u1",
          title: "Master Angular", 
          summary: "Learn basic angular",
          dueDate: "2025-12-31"
        }, 
        {
          id: "t2", 
          userId: "u2",
          title: "Learning C#", 
          summary: "Learn basic C#",
          dueDate: "2025-12-31"
        },
        {
          id: "t3", 
          userId: "u3",
          title: "Learning AWS", 
          summary: "Learn AWS",
          dueDate: "2025-12-31"
        },
        {
          id: "t4", 
          userId: "u4",
          title: "Master Angular", 
          summary: "Learn basic angular",
          dueDate: "2025-12-31"
        }
    ]

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId)
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        })
    }
    removeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId)
    }
}