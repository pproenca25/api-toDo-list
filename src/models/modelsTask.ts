export interface ITask{
    id: string,
    description: string,
    data: string,
    status: 'completed' | 'in_progress'
}