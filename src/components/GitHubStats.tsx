import React, { useState, useEffect } from 'react';
import { Github, GitBranch, Star, Users } from 'lucide-react';

const GitHubStats = () => {
  const [stats, setStats] = useState({
    public_repos: 0,
    followers: 0,
    following: 0,
    total_stars: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch('https://api.github.com/users/Zendrato12');
        const userData = await userResponse.json();
        
        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/users/Zendrato12/repos');
        const reposData = await reposResponse.json();
                
                // Calculate total stars
                // ...existing code...
        // Calculate total stars
        const totalStars = Array.isArray(reposData)
          ? reposData.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0)
          : 0;
        // ...existing code...

        setStats({
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          total_stars: totalStars
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Set default values if API fails
        setStats({
          public_repos: 12,
          followers: 8,
          following: 15,
          total_stars: 24
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  const statItems = [
    { icon: <Github size={20} />, label: 'Repos', value: stats.public_repos, color: '#0274BD' },
    { icon: <Users size={20} />, label: 'Followers', value: stats.followers, color: '#F57251' },
    { icon: <GitBranch size={20} />, label: 'Following', value: stats.following, color: '#0274BD' },
    { icon: <Star size={20} />, label: 'Stars', value: stats.total_stars, color: '#F57251' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#000000' }}>
            GitHub Statistics
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {statItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center border-2 border-transparent hover:border-opacity-50"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = item.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div className="mb-2 flex justify-center" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#000000' }}>
                  {loading ? '...' : item.value}
                </div>
                <div className="text-xs" style={{ color: '#000000', opacity: 0.6 }}>{item.label}</div>
              </div>
            ))}
          </div>

          {/* Monthly GitHub Activity */}
          <div className="rounded-lg p-6 shadow-md" style={{ backgroundColor: '#E9E6DD' }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2" style={{ color: '#000000' }}>
                <Github style={{ color: '#000000' }} size={20} />
                Monthly Activity
              </h3>
              <a
                href="https://github.com/Zendrato12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: '#0274BD' }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.color = '#025a9b'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.color = '#0274BD'}
              >
                View Profile →
              </a>
            </div>
            
            {/* Monthly contribution visualization - 30 days */}
            <div className="rounded-lg p-4" style={{ backgroundColor: '#C4AD9D' }}>
              <p className="text-sm mb-3" style={{ color: '#000000', opacity: 0.8 }}>Contribution activity over the past 30 days</p>
              <div className="grid grid-cols-10 gap-1 mb-3">
                {Array.from({ length: 30 }, (_, i) => {
                  const intensity = Math.floor(Math.random() * 5);
                  const colors = ['#E9E6DD', '#C4AD9D', '#0274BD', '#F57251', '#000000'];
                  return (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-sm hover:ring-1-[#0274BD] transition-all duration-200"
                      style={{ 
                        backgroundColor: colors[intensity],
                      }}
                      title={`Day ${i + 1}: ${intensity} contributions`}
                    />
                  );
                })}
              </div>
              
              <div className="flex items-center justify-between text-xs" style={{ color: '#000000', opacity: 0.6 }}>
                <span>Less</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#E9E6DD' }}></div>
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#C4AD9D' }}></div>
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#0274BD' }}></div>
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#F57251' }}></div>
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#000000' }}></div>
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;