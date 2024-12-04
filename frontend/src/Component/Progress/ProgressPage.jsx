import React from 'react';
import { useSelector } from 'react-redux';
import {
    PieChart, Pie, Cell, Tooltip, Legend,
    BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from 'recharts';
import { Box, Typography, Paper, Grid } from '@mui/material';
import './ProgressPage.css';

const ProgressPage = () => {
    const learningProgress = useSelector(state => state.progress.learningProgress);
    const assignmentProgress = useSelector(state => state.progress.assignmentProgress);

    const totalProgress = learningProgress + assignmentProgress;

    const data = [
        { name: 'Learning Progress', value: learningProgress },
        { name: 'Assignment Progress', value: assignmentProgress },
    ];

    const barData = [
        { name: 'Progress', learning: learningProgress, assignment: assignmentProgress }
    ];

    const PIE_COLORS = ['#4caf50', '#2196f3'];
    const BAR_COLORS = ['#4caf50', '#2196f3'];

    return (
        <Box className="progress-page-container">
            <Paper elevation={4} className="progress-page-paper">
                <Typography variant="h4" component="div" gutterBottom className="progress-page-title">
                    Your Progress Dashboard
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} className="grid-item">
                        <Typography variant="h6" className="chart-title">Learning vs Assignment Progress</Typography>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={150}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className="grid-item">
                        <Typography variant="h6" className="chart-title">Detailed Progress</Typography>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={barData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="learning" fill={BAR_COLORS[0]} />
                                    <Bar dataKey="assignment" fill={BAR_COLORS[1]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Grid>
                </Grid>
                <Typography variant="h6" className="progress-text">
                    Total Progress: {totalProgress.toFixed(2)}%
                </Typography>
            </Paper>
        </Box>
    );
};

export default ProgressPage;
